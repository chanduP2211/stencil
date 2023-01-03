import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'teacher-home',
  styleUrl: 'teacher-home.css',
  shadow: true,
})
export class TeacherHome {
  @State() valid: boolean = false;
  render() {
    let content: string = '';
    if (this.valid) {
      content = (
        <div class="nav">
          <ul>
            <li onClick={this.home.bind(this)}>HOME</li>
            <li onClick={this.student.bind(this)}>STUDENT</li>
            <li onClick={this.profile.bind(this)}>PROFILE</li>
            <li onClick={this.report.bind(this)}>REPORT</li>
            <li onClick={this.logout.bind(this)}>LOGOUT</li>
          </ul>
        </div>
      );
    }
    return (
      <div class="navBar">
        <div class="main">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.6em" class="menu" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" onClick={this.show.bind(this)}>
            <path fill="currentColor" d="M3 8V7h17v1H3Zm17 4v1H3v-1h17ZM3 17h17v1H3v-1Z" />
          </svg>
          <h1>STUDENT ATTENDANCE MANAGEMENT SYSTEM</h1>
        </div>
        {content}
      </div>
    );
  }
  show() {
    this.valid = !this.valid;
  }
  home() {
    location.href = '/teacher/home';
    this.valid = !this.valid;
  }
  student() {
    location.href = '/teacher/student';
    this.valid = !this.valid;
  }
  profile() {
    location.href = '/teacher/profile';
    this.valid = !this.valid;
  }
  report() {
    location.href = '/teacher/report';
    this.valid = !this.valid;
  }
  async logout() {
    if (confirm('Are You Sure')) {
      location.href = '/teacher/login';
    }
  }
}
