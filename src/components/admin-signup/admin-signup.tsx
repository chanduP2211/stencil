import { Component, h, Element } from "@stencil/core";
import { Data } from "../stencil_api";

@Component({
    tag: 'admin-signup',
    styleUrl: 'admin-signup.css',
    shadow: true
})
export class AdminSignUp{

    @Element() el:HTMLElement

    render(){
        return(
            <div>
            <aside>
                <div id='main'><h1>SIGN UP</h1></div>
                <div id='sub'>
            <form onSubmit= {this.submiting.bind(this)}>
                 <label htmlFor="username">USERNAME</label><br />
                 <input type="email" id='username' name='username'/><br />
                 <label htmlFor="passwword">PASSWORD</label><br />
                 <input type="password" id='password' name='password'/><br />
                 <label htmlFor="confirm-password">CONFIRM-PASSWORD</label><br />
                 <input type="password" id='confirm' name="confirm-password"/><br />
                 <div id='button'>
                 <button type="submit">SUBMIT</button>
                 </div>
            </form>
            </div>
          
            </aside>
            </div>
        )
    }
    async submiting(event:Event){
        event.preventDefault()
      
      const username:HTMLInputElement = (this.el.shadowRoot.querySelector('#username') as HTMLInputElement)
      const password:HTMLInputElement = (this.el.shadowRoot.querySelector('#password') as HTMLInputElement)
      const confirm_password:HTMLInputElement = (this.el.shadowRoot.querySelector('#confirm') as HTMLInputElement)
       
      let valid:boolean = true;
      if(username.value === ''|| password.value === ''){
        valid = false;
        alert('Please Fill the data')
      }
      else{
        if(password.value != confirm_password.value){
            valid = false;
            alert('Password Is Not Match')
          }
      }
      if(valid){
      let user:object = {
          username : username.value,
          password : password.value
      }
      await Data.api('addAdmin','POST',user)
      location.href="/"
    }
    }
  
}
