import { Component, h } from '@stencil/core';

@Component({
  tag: 'teacher-background',
  styleUrl: 'teacher-background.css',
  shadow: true,
})
export class TeacherBackground {

  render() {
    return (
      <div>
      <teacher-home/>
       <div class='image'>
         <div class='heading'>
            <h1 class='welcome'>WELCOME</h1>
            <h1 class='welcome'>TO</h1>
            <h1 class='content'>STUDENT ATTENDANCE MANAGEMENT SYSTEM</h1>
         </div>
       </div>
    </div>
    );
  }

}
