import { Component, h, State } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'admin-report',
  styleUrl: 'admin-report.css',
  shadow: true,
})
export class AdminReport {
  @State() valid: boolean = false;
  @State() check: boolean = false;
  @State() total: any[];
  @State() attendance: any[];
  date: HTMLInputElement;

  async componentWillLoad() {
    this.total = await Data.api('getAttendance', 'GET', '');
  }

  render() {
    let content: string = '';
    if (this.valid) {
      content = <total-report />;
    }
    if (this.check) {
      content = (
        <div class="table">
          {this.total.map(element => {
            if (element.date === this.date.value) {
              return (
                <ol class="body">
                  <li>{element.rollNo}</li>
                  <li>{element.name}</li>
                  <li>{element.section}</li>
                  <li>SUBJECT: {element.subject}</li>
                  <li>ATTEND: {element.attendance}</li>
                  <li>{element.date}</li>
                </ol>
              );
            }
          })}
        </div>
      );
    }
    return (
      <div class="background">
        <admin-home />
        <div class="element">
          <div class="element1">
            <div class="ele">
              <input type="date" name="date" class="date" ref={el => (this.date = el)} />
            </div>
            <div class="ele">
              {' '}
              <button onClick={this.reportByDate.bind(this)} class="reportDate">
                REPORT BY DATE
              </button>
            </div>
            <div class="ele">
              <button onClick={this.totalReport.bind(this)} class="report">
                TOTAL REPORT
              </button>
            </div>
          </div>
        </div>
        <div class="element2">{content}</div>
      </div>
    );
  }
  totalReport() {
    this.valid = true;
    this.check = false;
  }
  reportByDate() {
    this.valid = false;
    this.check = true;
  }
}
