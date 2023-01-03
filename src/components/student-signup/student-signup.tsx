import { Component, Host, h, Element } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'student-signup',
  styleUrl: 'student-signup.css',
  shadow: true,
})
export class StudentSignup {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host>
        <div>
          <aside>
            <div id="main">
              <h1>SIGN UP</h1>
            </div>
            <div id="sub">
              <form onSubmit={this.submiting.bind(this)}>
                <label htmlFor="username">USERNAME</label>
                <br />
                <input type="text" id="username" name="username" />
                <br />
                <label htmlFor="passwword">PASSWORD</label>
                <br />
                <input type="password" id="password" name="password" />
                <br />
                <label htmlFor="change-password">CHANGE-PASSWORD</label>
                <br />
                <input type="password" id="change" name="change-password" />
                <br />
                <label htmlFor="confirm-password">CONFIRM-PASSWORD</label>
                <br />
                <input type="password" id="confirm" name="confirm-password" />
                <br />
                <div id="button">
                  <button type="submit">SUBMIT</button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </Host>
    );
  }
  async submiting(event: Event) {
    event.preventDefault();
    const stu_username: HTMLInputElement = this.el.shadowRoot.querySelector('#username') as HTMLInputElement;
    const stu_password: HTMLInputElement = this.el.shadowRoot.querySelector('#password') as HTMLInputElement;
    const change_password: HTMLInputElement = this.el.shadowRoot.querySelector('#change') as HTMLInputElement;
    const confirm_password: HTMLInputElement = this.el.shadowRoot.querySelector('#confirm') as HTMLInputElement;

    let s_login: any[] = await Data.api('getLoginStudent', 'GET', '');

    let valid = false;
    s_login.map(element => {
      if (stu_username.value === element.username && stu_password.value === element.password) {
        valid = true;
      }
    });
    if (valid) {
      if (change_password.value === confirm_password.value) {
        let student: object = {
          username: stu_username.value,
          password: change_password.value,
        };
        await Data.api('addLoginStudent', 'POST', student);

        alert('You Successfully SignUp');
        location.href = '/student/login';
      } else alert('Password is Not Match');
    } else alert('Inavlid Username or Password');
  }
}
