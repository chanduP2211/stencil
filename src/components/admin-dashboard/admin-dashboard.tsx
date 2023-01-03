import { Component, h } from '@stencil/core';

@Component({
  tag: 'admin-dashboard',
  styleUrl: 'admin-dashboard.css',
  shadow: true,
})
export class AdminDashboard {
  render() {
    return (
      <div>
        <admin-home />
        <div class="image">
          <div class="heading">
            <h1 class="welcome">WELCOME</h1>
            <h1 class="welcome">TO</h1>
            <h1 class="content">STUDENT ATTENDANCE MANAGEMENT SYSTEM</h1>
          </div>
        </div>
      </div>
    );
  }
}
