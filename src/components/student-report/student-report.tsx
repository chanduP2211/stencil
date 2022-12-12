import { Component, h, Element, State } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'student-report',
  styleUrl: 'student-report.css',
  shadow: true,
})
export class StudentReport {
  @State() percentage:number
  @Element() el:HTMLElement
  @State() data:any[]
  @State() attendance:any[]
  @State()  id:string
  @State()  date:string
  @State() valid:boolean = false
  @State() test:boolean = false

  
  async componentWillLoad(){
    this.data = await Data.api('getReport','GET','')
    this.attendance = await Data.api('getAttendance','GET','')
    this.id = sessionStorage.getItem('student_id')
    let detail = new Date();
    let day =''
    if(detail.getDate()<10){
      alert('hii')
      day='0'+detail.getDate()
    }
    day+= detail.getDate()
    this.date = `${detail.getFullYear()}-${detail.getMonth()+1}-${day}`

  }

  render() {
   let content = '';
   if(this.valid){
      content = (<div class='total'>
       <div class='table'>
     {
      this.data.map(element=>{

       if(this.id === element.rollNo){
       let percentage = Math.round((element.present/(element.present+element.absent))*100)
       return(   
         <ol  class ={percentage<75?(percentage<50?'red body':'yellow body'):'green body'} ><li>{element.rollNo}</li><li>{element.name}</li><li>{element.section}</li><li>TOTAL: {element.present + element.absent}</li><li>PRESENT: {element.present}</li><li>ABSENT: {element.absent}</li><li>PERCENTAGE: {percentage}%</li></ol>
       )
       }
    
   }) 
 }
    </div>
      </div>)
   }
   if(this.test){
    content = (<div class='total'>
   <div class='table'>
   {
    this.attendance.map(element=>{

     if(this.id === element.rollNo && this.date === element.date){
     return(   
       <ol class='body1'><li>{element.rollNo}</li><li>{element.name}</li><li>{element.section}</li><li>{element.subject}</li><li>{element.attendance}</li><li>{element.date}</li></ol>
     )
     }
    
 }) 
}
   </div>
    </div>)
   }
    return (
      <div  class='background' >
        <div class='home'>
       <student-home/>

       <div class='rotate'>
       <div><div class='check'><h1 onClick={this.showing.bind(this)}> TOTAL REPORT</h1></div></div>
       <div><div class='check'><h1 onClick={this.getAttendnce.bind(this)}> TODAY REPORT</h1></div></div>
       </div>
       {content}
       </div>
      </div>
    );
  }
showing(){
  this.valid = true
  this.test = false
}
getAttendnce(){
this.test = true
this.valid = false
}
}
