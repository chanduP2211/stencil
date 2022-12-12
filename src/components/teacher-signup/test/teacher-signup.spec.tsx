import { newSpecPage } from '@stencil/core/testing';
import { TeacherSignup } from '../teacher-signup';

describe('teacher-signup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeacherSignup],
      html: `<teacher-signup></teacher-signup>`,
    });
    expect(page.root).toEqualHtml(`
      <teacher-signup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </teacher-signup>
    `);
  });
});
