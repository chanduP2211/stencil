import { Component, h, Element, State } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'teacher-student',
  styleUrl: 'teacher-student.css'
})
export class TeacherStudent {

  @Element() el:HTMLElement
  @State() valid:boolean
  @State() stu:string
  @State() data:any[]
  @State() subject:string
  @State() person:any[]
  @State() details:any[]
    
  student_id : HTMLInputElement
  section: HTMLSelectElement
  date:HTMLInputElement

  async componentWillLoad(){
    this.person = await Data.api('getStudent','GET','')
    this.details = await Data.api('getSection','GET','')
  }
  render() {
  
    return (
<div class='background'>
      
        <teacher-home/>
    
        <div class="filter">
          <div class="bar">
          
               <select  class="input" ref={data=>this.section = data}>
                <option value="select">SELECT CLASS</option>
                {
                  this.details.map(element=>{
                      return(
                        <option value={element.section}>{element.section}</option>
                      )
                  })
                }
              </select>
                  <input class="input" type="date" placeholder='Add Date' ref={data=>this.date = data}/>
                    <button class="input" onClick={this.getting.bind(this)}>GET</button>
                 </div>
              </div>
        <div class='content'>
        <form name='form'>
          <div class="table">
            <table>
              <thead>
                 <th>ID</th>
                 <th>NAME</th>
                 <th>CLASS</th>
                 <th>ATTENDANCE</th>
              </thead>
              <tbody id='tbody'>
                 {
             
            this.person.map(element=>{
                        if(this.valid && this.section.value == element.section){
                           return (
                            <tr><td>{element.id}</td><td>{element.fname+' '+element.lname}</td><td>{element.section}</td>
                            <td class='radio'>
                               <div class='radio'>
                             
                                  <input type="radio" name= {element.id} id="present" class="attendance"   value='Present' />
                                  <label  class='attend'>PRESENT</label>
                                 
                                  <input type="radio" class="attendance" name={element.id} id="absent"  value='Absent' />
                                  <label id='attend'>ABSENT</label>
                                  </div>
                              
                              </td>
                              </tr>
                           )
                          }
                     })            
                 }
            
              </tbody>
            </table>
            <div class='element3'>
               <button class='submit' onClick={this.submiting.bind(this)}>SUBMIT</button>
              </div>
          </div>
          </form>
          </div>
          </div>
    );
  }

getting(){
  this.valid = !this.valid
}
async submiting(event:Event){
event.preventDefault()
let tbody:HTMLTableElement = this.el.querySelector('#tbody') as HTMLTableElement
this.subject = await this.getSubject()

for(let tr of Array.from(tbody.children)){
  let student_id:string = tr.children[0].textContent;
  let student_name:string = tr.children[1].textContent;
  let value:string = document.forms["form"][`${student_id}`].value;
  let present:number = 0
  let absent:number = 0

  await this.apiGet(student_id,student_name ,value,present,absent)
    } 
    alert("Attendance Taken Successfully")
}

async apiGet(id,name,attend,present,absent){
 let data:any[] =  await Data.api('getReport','GET','')
let result:boolean = true;
if(data){
data.forEach((element)=>{
  if(id === element.rollNo){
    result = false;
   this.apiCalling(element.rollNo,element.name,element.present,element.absent,attend)
  }
})
}
if(result)
this.apiCall(id,name,attend,present,absent)
this.apiAttendance(id,name,attend)
}

async apiCalling(id,name,present,absent,attend){
  if(attend === "Present")
  present++;
  else
  absent++;
  let bodyData:object = {
    "rollNo" : id,
    "name" : name,
    "section": this.section.value,
    "subject":this.subject,
    "present":present,
    "absent": absent,
    "attend": attend
 };
 await Data.api('addReport','POST',bodyData)
}


async apiCall(id,name,attend,present,absent){
  if(attend === "Present")
  present++;
  else
  absent++;
  let bodyData:object = {
    "rollNo" : id,
    "name" : name,
    "section":this.section.value,
    "subject":this.subject,
    "present":present,
    "absent": absent,
    "attend": attend
 };
 await Data.api('addReport','POST',bodyData)
}

async apiAttendance(id,name,attend){

  let bodyData:object = {
    "rollNo" : id,
    "name" : name,
    "section":this.section.value,
    "subject":this.subject,
    "attendance" : attend,
    "date": this.date.value
 }
 await Data.api('addAttendance','POST',bodyData)
}

async getSubject(){
  let teacher:any[] = await Data.api('getTeacher','GET','')
  let teacher_id = sessionStorage.getItem('teacher_id')
  let tname:string = ''
    teacher.map(person=>{
      if(teacher_id === person.id)
         tname = person.name
    })
  let respone:any[] = await Data.api('getSubject','GET','')
  let sub:string = "";
  respone.forEach((element)=>{
      if(tname === element.teacher)
      sub = element.subject;
    })
 return sub;
}
}





