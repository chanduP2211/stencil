import { Component, h, State } from '@stencil/core';
@Component({
  tag: 'admin-home',
  styleUrl: 'admin-home.css',
  shadow: true,
})
export class AdminHome {
  @State() valid: boolean = false;
  render() {
    let content: string = '';

    if (this.valid) {
      content = (
        <div class="nav">
          <ul>
            <li onClick={this.home.bind(this)}>HOME</li>
            <li onClick={this.teacher.bind(this)}>TEACHER</li>
            <li onClick={this.student.bind(this)}>STUDENT</li>
            <li onClick={this.subject.bind(this)}>SUBJECT</li>
            <li onClick={this.report.bind(this)}>REPORT</li>
            <li onClick={this.logout.bind(this)}>LOGOUT</li>
          </ul>
        </div>
      );
    }
    return (
      <div class="navBar">
        <div class="main">
          <div class="menu_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.6em" onClick={this.show.bind(this)}>
              <path fill="currentColor" d="M3 8V7h17v1H3Zm17 4v1H3v-1h17ZM3 17h17v1H3v-1Z" />
            </svg>
          </div>
          <div class="lab">
            <label> STUDENT ATTENDANCE MANAGEMENT SYSTEM</label>
          </div>
        </div>
        {content}
      </div>
    );
  }

  show() {
    this.valid = !this.valid;
  }
  home() {
    location.href = '/home';
    this.valid = !this.valid;
  }
  teacher() {
    location.href = '/teacher/show';
    this.valid = !this.valid;
  }
  student() {
    location.href = '/student/show';
    this.valid = !this.valid;
  }
  subject() {
    location.href = '/subject/show';
    this.valid = !this.valid;
  }
  report() {
    location.href = '/report';
    this.valid = !this.valid;
  }
  logout() {
    location.href = '/login';
    this.valid = !this.valid;
  }
}
