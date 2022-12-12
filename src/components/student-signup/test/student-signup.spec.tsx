import { newSpecPage } from '@stencil/core/testing';
import { StudentSignup } from '../student-signup';

describe('student-signup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudentSignup],
      html: `<student-signup></student-signup>`,
    });
    expect(page.root).toEqualHtml(`
      <student-signup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </student-signup>
    `);
  });
});
