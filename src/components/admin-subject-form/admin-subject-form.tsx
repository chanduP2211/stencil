import { Component, h, State, Prop } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'admin-subject',
  styleUrl: 'admin-subject-form.css',
  shadow: true,
})
export class AdminStudent {
  @State() person: any[];
  @State() valid: boolean;
  subject: HTMLInputElement;
  teacher: HTMLSelectElement;

  @Prop() subject_name: string;
  @Prop() teacher_name: string;

  async componentWillLoad() {
    this.person = await Data.api('getTeacher', 'GET', '');
  }
  render() {
    return (
      <div>
        <admin-home />
        <form>
          <div class="form">
            <div class="parent_ele">
              <div class="ele">
                <input type="text" ref={el => (this.subject = el)} placeholder="Subject" value={this.subject_name} />
              </div>
              <div class="ele">
                <select class="input" ref={data => (this.teacher = data)}>
                  <option value={this.teacher_name}>{this.teacher_name}</option>
                  {this.person.map(element => {
                    if (element.name != this.teacher_name) return <option value={element.name}>{element.name}</option>;
                  })}
                </select>
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
    );
  }
  async submiting(event: Event) {
    event.preventDefault();

    if (this.subject.value === '' || this.teacher.value === '') {
      this.valid = false;
      alert('Please Fill All Data');
    } else this.valid = true;

    if (this.valid) {
      const data: object = {
        subject: this.subject.value,
        teacher: this.teacher.value,
      };
      await Data.api('addSubject', 'POST', data);
      alert('data Entered Successfully');
      location.href = '/subject/show';
    }
  }
  cancelling() {
    location.href = '/subject/show';
  }
}
