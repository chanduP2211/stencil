import { Component, h, State } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'student-profile',
  styleUrl: 'student-profile.css',
  shadow: true,
})
export class StudentProfile {
  @State() data: any[];
  @State() person: any[];
  @State() student_id: string;

  async componentWillLoad() {
    this.data = await Data.api('getStudent', 'GET', '');
    this.student_id = sessionStorage.getItem('student_id');
  }

  render() {
    let content: HTMLElement = (
      <div>
        {this.data.map(element => {
          if (element.id === this.student_id) {
            return (
              <div class="body">
                <ol>
                  <li>ID</li>
                  <li>{element.id}</li>
                </ol>
                <ol>
                  <li>NAME</li>
                  <li>{element.fname + ' ' + element.lname}</li>
                </ol>
                <ol>
                  <li>DOB</li>
                  <li>{element.dob}</li>
                </ol>
                <ol>
                  <li>GENDER</li>
                  <li>{element.gender}</li>
                </ol>
                <ol>
                  <li>CLASS</li>
                  <li>{element.section}</li>
                </ol>
                <ol>
                  <li>PHONE</li>
                  <li>{element.phone}</li>
                </ol>
                <ol>
                  <li>CITY</li>
                  <li>{element.address}</li>
                </ol>
              </div>
            );
          }
        })}
      </div>
    );
    return (
      <div class="background">
        <student-home />

        <div class="content">{content}</div>
      </div>
    );
  }
}
