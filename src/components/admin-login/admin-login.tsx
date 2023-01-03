import { Component, h, State, Element } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'admin-login',
  styleUrl: 'admin-login.css',
  shadow: true,
})
export class AdminLogin {
  @State() check: boolean;
  @State() test: boolean;
  @State() username: HTMLInputElement;
  @State() password: HTMLInputElement;
  @State() admin: any[];
  @Element() el: HTMLElement;

  async componentWillLoad() {
    this.admin = await Data.api('getAdmin', 'GET', '');
  }
  render() {
    let content1: string = '';
    if (this.check) content1 = <p class="user">INVALID USERNAME</p>;
    let content2: string = '';
    if (this.test) content2 = <p class="user">INVALID PASSWORD</p>;
    return (
      <div class="main">
        <div class="header">
          <div class="head1">
            <h1>STUDENT ATTENDANCE MANAGEMENT SYSTEM</h1>
          </div>
          <div class="head2">ADMIN LOGIN</div>
        </div>
        <div class="section">
          <form onSubmit={this.submiting.bind(this)}>
            <div class="form">
              <label htmlFor="username">USERNAME</label>
              <br />
              <input type="email" ref={el => (this.username = el)} onInput={(this.checkUsername.bind(this))} /> <br />
              {content1}
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input type="password" ref={el => (this.password = el)} onInput={this.checkPassword.bind(this)} />
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
            <a href="/signup">SIGN UP</a>
          </div>
          <div class="navBar">
            <a href="/teacher/login">Teacher</a>
            <a href="/student/login">Student</a>
          </div>
        </div>
      </div>
    );
  }
  submiting(event: Event) {
    event.preventDefault();
  // let user =  (this.el.shadowRoot.querySelector('input') as HTMLInputElement).value
    if (!this.test && !this.check && (this.username.value != '' || this.password.value != '')) {
      alert('You can Login');
      location.href = '/home';
    } else alert('Inavalid Username or Password');
  }
  checkUsername(event: Event) {
    let username: string = (event.target as HTMLInputElement).value;
    this.admin.forEach(element => {
      if (element.username != username || username === "") {
        this.check = true;
      } else {
        this.check = false;
      }
    });
  }
  checkPassword(event: Event) {
    let password: string = (event.target as HTMLInputElement).value;
    this.admin.forEach(element => {
      if (element.password != password || password === "") {
        this.test = true;
      } else {
        this.test = false;
      }
    });
  }
}
