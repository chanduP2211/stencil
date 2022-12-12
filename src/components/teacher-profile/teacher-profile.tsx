import { Component, h, State } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'teacher-profile',
  styleUrl: 'teacher-profile.css',
  shadow: true,
})
export class TeacherProfile {

  @State() data:any[]
  @State() id:string 
  @State() person:any[]

  async componentWillLoad(){
    this.data = await Data.api('getTeacher','GET','')
    this.id = sessionStorage.getItem('teacher_id')
    this.person = await Data.api('getLoginTeacher','GET','')
  }
  
  render() {

  let content:HTMLElement = (
    <div>
      {
          this.data.map(element=>{
            if(element.id == this.id){
          return(
            <div class='body'>
                <ol>
                   <li>ID</li>
                   <li>{element.id}</li>
                </ol>
                <ol>
                   <li>NAME</li>
                   <li>{element.name}</li>
                </ol>
                <ol>
                   <li>EMAIL</li>
                   <li>{element.email}</li>
                </ol>
                <ol>
                   <li>GENDER</li>
                   <li>{element.gender}</li>
                </ol>
                <ol>
                   <li>PHONE</li>
                   <li>{element.phone}</li>
                </ol>
                <ol>
                   <li>DEGREE</li>
                   <li>{element.degree}</li>
                </ol>
                <ol>
                   <li>EXPERIENCE</li>
                   <li>{element.experience}</li>
               </ol>
               <ol>
                   <li>ADDRESS</li>
                   <li>{element.address}</li>
               </ol>
           </div>
          )
          }
      })
    }
  </div>
)

    return (
      <div class='background'>
         <div class='home'>
        <teacher-home/>
        </div>
         <div class='content'>
         {content}
         </div>
      </div>
    );
  }

}
