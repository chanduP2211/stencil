import { Component, h } from '@stencil/core';

@Component({
  tag: 'teacher-report',
  styleUrl: 'teacher-report.css',
  shadow: true,
})
export class TeacherReport {
  render() {
    return (
      <div class="background">
        <teacher-home />

        <div class="total">
          <total-report />
        </div>
      </div>
    );
  }
}
