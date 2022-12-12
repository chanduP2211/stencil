import { Component, h } from '@stencil/core';

@Component({
  tag: 'student-background',
  styleUrl: 'student-background.css',
  shadow: true,
})
export class StudentBackground {

  render() {
    return (
      <div>
      <student-home/>
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
