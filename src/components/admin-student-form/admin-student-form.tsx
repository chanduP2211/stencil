import { Component, h, Element, State, Prop } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'admin-student',
  styleUrl: 'admin-student-form.css',
  shadow: true,
})
export class AdminStudent {
  @State() valid: boolean;
  @Element() el: HTMLElement;
  id: HTMLInputElement;
  fname: HTMLInputElement;
  lname: HTMLInputElement;
  dob: HTMLInputElement;
  section: HTMLInputElement;
  phone: HTMLInputElement;
  gender: HTMLSelectElement;
  address: HTMLTextAreaElement;

  @Prop() s_id: string;
  @Prop() s_fname: string;
  @Prop() s_lname: string;
  @Prop() s_dob: string;
  @Prop() s_section: string;
  @Prop() s_phone: string;
  @Prop() s_gender: string;
  @Prop() s_address: string;

  render() {
    return (
      <div class="backGround">
        <admin-home />

        <div class="background">
          <form>
            <div class="form">
              <div class="parent_ele">
                <div class="ele">
                  <input type="text" ref={el => (this.id = el)} placeholder="Student ID" value={this.s_id} />
                </div>
                <div class="ele">
                  <input type="text" ref={el => (this.fname = el)} placeholder="First Name" value={this.s_fname} />
                </div>
                <div class="ele">
                  <input type="text" ref={el => (this.lname = el)} placeholder="Last Name" value={this.s_lname} />
                </div>
                <div class="ele">
                  <select ref={el => (this.gender = el)}>
                    <option selected value="">
                      select
                    </option>
                    <option value="Male" selected={this.s_gender === 'Male'}>
                      Male
                    </option>
                    <option value="Female" selected={this.s_gender === 'Female'}>
                      Female
                    </option>
                  </select>
                </div>
                <div class="ele">
                  <input type="number" ref={el => (this.phone = el)} placeholder="Phone Number" value={this.s_phone} />
                </div>
                <div class="ele">
                  <input type="date" ref={el => (this.dob = el)} placeholder="Date of Birth" value={this.s_dob} />
                </div>
                <div class="ele">
                  <input type="text" ref={el => (this.section = el)} placeholder="Class" value={this.s_section} />
                </div>
                <div class="ele">
                  <textarea ref={el => (this.address = el)} placeholder="City" rows={1} value={this.s_address} />
                </div>
              </div>
              <div class="btn">
                <button type="submit" class="submit" onClick={this.submiting.bind(this)}>
                  Submit
                </button>
                <label onClick={this.cancelling} class="cancel">
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
      this.fname.value === '' ||
      this.lname.value === '' ||
      this.dob.value === '' ||
      this.gender.value === '' ||
      this.phone.value === '' ||
      this.section.value === '' ||
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
        fname: this.fname.value,
        lname: this.lname.value,
        gender: this.gender.value,
        dob: this.dob.value,
        phone: +this.phone.value,
        section: this.section.value,
        address: this.address.value,
      };
      console.log(typeof +this.phone.value);
      await Data.api('addStudent', 'POST', data);
      let teach: object = {
        username: this.id.value,
        password: this.fname.value,
      };
      console.log(teach);
      await Data.api('addLoginStudent', 'POST', teach);
      let section: object = {
        section: this.section.value,
        id: this.id.value,
      };

      await Data.api('addSection', 'POST', section);

      alert('data Entered Successfully');
      location.href = '/student/show';
    }
  }
  cancelling() {
    if (confirm('Are You Sure')) location.href = '/student/show';
  }
}
