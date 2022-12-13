import { Component, h, State, Element } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'teacher-login',
  styleUrl: 'teacher-login.css',
  shadow: true,
})
export class AdminLogin {
  @State() valid: boolean = false;
  @State() check: boolean;
  @State() test: boolean;
  @State() teacher: any[];
  @Element() el: HTMLElement;

  async componentWillLoad() {
    this.teacher = await Data.api('getLoginTeacher', 'GET', '');
  }
  render() {
    let content1: string = '';
    if (this.check) content1 = <p id="user">INVALID USERNAME</p>;
    let content2: string = '';
    if (this.test) content2 = <p id="user">INVALID PASSWORD</p>;
    return (
      <div class="main">
        <div class="header">
          <div class="head1">
            <h1>STUDENT ATTENDANCE MANAGEMENT SYSTEM</h1>
          </div>
          <div class="head2">TEACHER LOGIN</div>
        </div>
        <div class="section">
          <form onSubmit={this.submiting.bind(this)}>
            <div class="form">
              <label htmlFor="username">USERNAME</label>
              <br />
              <input type="text" id="username" onInput={this.checkUsername.bind(this)} /> <br />
              {content1}
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input type="password" id="password" onInput={this.checkPassword.bind(this)} />
              <br />
              {content2}
            </div>
            <div class="footer">
              <button type="submit">LOGIN</button>
            </div>
          </form>
        </div>
        <div class="nav">
          <div>
            <a href="/teacher/signup">Change Password</a>
          </div>
          <div class="navBar">
            <a href="/">Admin</a>
            <a href="/student/login">Student</a>
          </div>
        </div>
      </div>
    );
  }
  async submiting(event: Event) {
    event.preventDefault();
    const username: HTMLInputElement = this.el.shadowRoot.querySelector('#username') as HTMLInputElement;
    const password: HTMLInputElement = this.el.shadowRoot.querySelector('#password') as HTMLInputElement;

    if (!this.test && !this.check && (username.value != '' || password.value != '')) this.valid = true;
    else this.valid = false;

    if (this.valid) {
      sessionStorage.setItem('teacher_id', username.value);
      alert('You can Login');
      location.href = '/teacher/home';
    } else alert('Inavalid Username or Password');
  }
  checkUsername(event: Event) {
    let username: string = (event.target as HTMLInputElement).value;
    this.check = true;
    this.teacher.forEach(element => {
      if (element.username == username) {
        this.check = false;
      }
    });
  }
  checkPassword(event: Event) {
    let password = (event.target as HTMLInputElement).value;
    this.test = true;
    this.teacher.forEach(element => {
      if (element.username == (this.el.shadowRoot.querySelector('#username') as HTMLInputElement).value) {
        if (element.password == password) this.test = false;
      }
    });
  }
}
