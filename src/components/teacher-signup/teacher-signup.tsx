import { Component, Host, h, Element } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'teacher-signup',
  styleUrl: 'teacher-signup.css',
  shadow: true,
})
export class TeacherSignup {

  @Element() el:HTMLElement

 
  render() {
    return (
      <Host>
        <div>
            <aside>
                <div id='main'><h1>SIGN UP</h1></div>
                <div id='sub'>
            <form onSubmit= {this.submiting.bind(this)}>
                 <label htmlFor="username">USERNAME</label><br />
                 <input type="text" id='username' name='username'/><br />
                 <label htmlFor="passwword">PASSWORD</label><br />
                 <input type="password" id='password' name='password'/><br />
                 <label htmlFor="change-password">CHANGE-PASSWORD</label><br />
                 <input type="password" id='change' name="change-password"/><br />
                 <label htmlFor="confirm-password">CONFIRM-PASSWORD</label><br />
                 <input type="password" id='confirm' name="confirm-password"/><br />
                 <div id='button'>
                 <button type="submit">SUBMIT</button>
                 </div>
            </form>
            </div>
          
            </aside>
            </div>
      </Host>
    );
  }
  async submiting(event:Event){
    event.preventDefault()
  
  

  const teacher_username:HTMLInputElement = (this.el.shadowRoot.querySelector('#username') as HTMLInputElement)
  const teacher_password:HTMLInputElement = (this.el.shadowRoot.querySelector('#password') as HTMLInputElement)
  const change_password:HTMLInputElement = (this.el.shadowRoot.querySelector('#change') as HTMLInputElement)
  const confirm_password:HTMLInputElement = (this.el.shadowRoot.querySelector('#confirm') as HTMLInputElement)
   
 let t_login:any[] = await Data.api('getLoginTeacher','GET','')
   
  let valid = false;
  t_login.map(element => {
    if(teacher_username.value === element.username && teacher_password.value === element.password){
      valid = true
    }
  });
  if(valid){
     if(change_password.value === confirm_password.value){
    let teacher:object = {
         username : teacher_username.value,
         password : change_password.value
      }
    await Data.api('addLoginTeacher','POST',teacher)
       
      alert('You Successfully SignUp')
      location.href= '/teacher/login'
     }
     else
     alert('Password is Not Match')
  }
  else
  alert('Inavlid Username or Password')

}
}
