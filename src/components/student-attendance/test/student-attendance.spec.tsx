import { newSpecPage } from '@stencil/core/testing';
import { StudentAttendance } from '../student-attendance';

describe('student-attendance', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudentAttendance],
      html: `<student-attendance></student-attendance>`,
    });
    expect(page.root).toEqualHtml(`
      <student-attendance>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </student-attendance>
    `);
  });
});
