import { newSpecPage } from '@stencil/core/testing';
import { StudentProfile } from '../student-profile';

describe('student-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudentProfile],
      html: `<student-profile></student-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <student-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </student-profile>
    `);
  });
});
