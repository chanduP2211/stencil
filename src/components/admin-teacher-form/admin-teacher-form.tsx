import { Component, h, Element, State, Prop } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'admin-teacher',
  styleUrl: 'admin-teacher-form.css',
  shadow: true,
})
export class AdminTeacher {
  @State() valid: boolean;
  @Element() el: HTMLElement;
  id: HTMLInputElement;
  name: HTMLInputElement;
  email: HTMLInputElement;
  experience: HTMLInputElement;
  degree: HTMLInputElement;
  phone: HTMLInputElement;
  gender: HTMLSelectElement;
  address: HTMLTextAreaElement;

  @Prop() t_id: string;
  @Prop() t_name: string;
  @Prop() t_email: string;
  @Prop() t_gender: string;
  @Prop() t_phone: string;
  @Prop() t_degree: string;
  @Prop() t_experience: string;
  @Prop() t_address: string;

  render() {
    return (
      <div class="backGround">
        <admin-home />

        <div class="parent">
          <form>
            <div class="form">
              <div class="parent_ele">
                <div class="ele">
                  <input type="text" ref={el => (this.id = el)} placeholder="Teacher ID" value={this.t_id} />
                </div>
                <div class="ele">
                  <input type="text" ref={el => (this.name = el)} placeholder=" Name" value={this.t_name} />
                </div>
                <div class="ele">
                  <input type="email" ref={el => (this.email = el)} placeholder="Email" value={this.t_email} />
                </div>
                <div class="ele">
                  <select ref={el => (this.gender = el)}>
                    <option selected value="">
                      select
                    </option>
                    <option value="Male" selected={this.t_gender == 'Male'}>
                      Male
                    </option>
                    <option value="Female" selected={this.t_gender == 'Female'}>
                      Female
                    </option>
                  </select>
                </div>

                <div class="ele">
                  <input type="number" ref={el => (this.phone = el)} placeholder="Phone Number" value={this.t_phone} />
                </div>
                <div class="ele">
                  <input type="text" ref={el => (this.degree = el)} placeholder="Degree" value={this.t_degree} />
                </div>
                <div class="ele">
                  <input type="text" ref={el => (this.experience = el)} placeholder="Experience" value={this.t_experience} />
                </div>
                <div class="ele">
                  <textarea ref={el => (this.address = el)} placeholder="City" rows={1} value={this.t_address} />
                </div>
              </div>
              <div class="btn">
                <button type="submit" class="submit" onClick={this.submiting.bind(this)}>
                  Submit
                </button>
                <label onClick={this.cancelling.bind(this)} class="cancel">
                  Cancel
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  async submiting(event: Event) {
    event.preventDefault();

    if (
      this.id.value === '' ||
      this.name.value === '' ||
      this.email.value === '' ||
      this.gender.value === '' ||
      this.phone.value === '' ||
      this.degree.value === '' ||
      this.experience.value === '' ||
      this.address.value === ''
    ) {
      this.valid = false;
      alert('Please Fill All Data');
    } else if (!this.phone.value.match(/[6-9]{1}[0-9]{9}/)) {
      alert('Enter Valid Number');
      this.valid = false;
    } else this.valid = true;

    if (this.valid) {
      const data: object = {
        id: this.id.value,
        name: this.name.value,
        email: this.email.value,
        gender: this.gender.value,
        phone: this.phone.value,
        degree: this.degree.value,
        experience: this.experience.value,
        address: this.address.value,
      };

      await Data.api('addTeacher', 'POST', data);

      let teach: object = {
        username: this.id.value,
        password: this.name.value,
      };
      await Data.api('addLoginTeacher', 'POST', teach);

      alert('data Entered Successfully');
      location.href = '/teacher/show';
    }
  }

  cancelling() {
    alert('Are you sure');
    location.href = '/teacher/show';
  }
}
