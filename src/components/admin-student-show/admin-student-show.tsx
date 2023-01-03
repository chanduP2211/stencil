import { Component, h, State } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'admin-student-show',
  styleUrl: 'admin-student-show.css',
  shadow: true,
})
export class StudentShow {
  @State() valid: boolean = false;
  @State() check: boolean = false;
  @State() stu_id: string;
  @State() data: any[];

  async componentWillLoad() {
    this.data = await Data.api('getStudent', 'GET', '');
  }

  render() {
    let content: string = (
      <div class="content">
        <div class="addbutton">
          <button onClick={this.goToForm.bind(this)} class="insert"></button>
        </div>

        <div class="table">
          {this.data.map(element => {
            return (
              <ol class="body">
                <li>ID:{element.id}</li>
                <li>{element.fname + ' ' + element.lname}</li>
                <li>{element.gender}</li>
                <li>DOB:{element.dob}</li>
                <li>PH:{element.phone}</li>
                <li>{element.section}</li>
                <li>CITY:{element.address}</li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6em"
                    height="1.7em"
                    class="update"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 640 512"
                    onClick={this.updating.bind(this, element.id)}
                  >
                    <path
                      fill="currentColor"
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9l1.2-11.1l7.9-7.9l77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8l137.9-137.9l-71.7-71.7l-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8l-4.1 4.1l71.8 71.7l41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6em"
                    height="1.7em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    onClick={this.deleting.bind(this, element.id)}
                    class="delete"
                  >
                    <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                  </svg>
                </li>
              </ol>
            );
          })}
        </div>
      </div>
    );
    if (this.valid) {
      this.data.map(element => {
        if (this.stu_id === element.id) {
          content = (
            <admin-student
              s_id={element.id}
              s_fname={element.fname}
              s_lname={element.lname}
              s_dob={element.dob}
              s_section={element.section}
              s_phone={element.phone}
              s_gender={element.gender}
              s_address={element.address}
            />
          );
        }
      });
    }

    if (this.check) {
      content = <admin-student s_id="" s_fname="" s_lname="" s_dob="" s_section="" s_phone="" s_gender="" s_address="" />;
    }

    return (
      <div class="backGround">
        <div>
          <admin-home />

          {content}
        </div>
      </div>
    );
  }
  goToForm() {
    this.check = true;
  }
  async deleting(id) {
    await Data.api(`deleteStudent/${id}`, 'DELETE', '');
    await Data.api(`deleteLoginStudent/${id}`, 'DELETE', '');
    location.href = '/student/show';
  }
  updating(id) {
    this.stu_id = id;
    this.valid = !this.valid;
  }
}
