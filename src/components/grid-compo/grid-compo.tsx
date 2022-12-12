import { Component, State, h } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'grid-compo',
  styleUrl: 'grid-compo.css',
  shadow: true,
})
export class GridCompo {

   
  @State() valid:boolean = false
  @State() check:boolean = false
  @State() id:string
  @State() data:any[]
  
  async componentWillLoad(){
    this.data = await Data.api('getSubject','GET','')
  }
    render(){
        let count:number = 0
        let content:HTMLElement =(
            <div class='content'>
            <div class='addbutton'>
             <span onClick={this.goToForm.bind(this)} class='insert'></span>
              </div>
              <div class='table'>
                  <ol class='head'>
                     <li>Sl.No.</li>
                     <li>SUBJECT</li>
                     <li>TEACHER</li>
                     <li>ACTION</li>
                  </ol>
                        { this.data.map(element=>{
                            return(
                            <ol class='body'><li>{++count}</li><li>{ element.subject}</li><li>{ element.teacher}</li><li><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.7em" preserveAspectRatio="xMidYMid meet" class='update' viewBox="0 0 640 512" onClick={this.updating.bind(this,element.subject)}><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9l1.2-11.1l7.9-7.9l77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8l137.9-137.9l-71.7-71.7l-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8l-4.1 4.1l71.8 71.7l41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.7em" preserveAspectRatio="xMidYMid meet" class='delete' viewBox="0 0 24 24"  onClick={this.deleting.bind(this,element.subject)}><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></li></ol>
                            )
                        }) }
              </div>
              </div>
        )
        if(this.valid){
          this.data.map(element=>{
                if(element.subject === this.id){
                        content = <admin-subject
                        teacher_name = {element.teacher}
                        subject_name = {element.subject}
                        />   
                }
            })
        }

        if(this.check){
                content = <admin-subject
                teacher_name = ''
                subject_name = ''
                />   
          }
        return(
        <div class='backGround'>
            <div class='host'>
            <admin-home/>

            { content }
            </div>
          </div>
        )
    }
    goToForm(){
       this.check = !this.check
    }
    updating(id){
        this.id = id
        this.valid = !this.valid
    }
   async deleting(subject){
      
        await Data.api(`deleteSubject/${subject}`,'DELETE','')
        location.reload();
    }
}
