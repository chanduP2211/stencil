import { newSpecPage } from '@stencil/core/testing';
import { StudentLogin } from '../student-login';

describe('student-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudentLogin],
      html: `<student-login></student-login>`,
    });
    expect(page.root).toEqualHtml(`
      <student-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </student-login>
    `);
  });
});
