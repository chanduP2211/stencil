import { newSpecPage } from '@stencil/core/testing';
import { StudentHome } from '../student-home';

describe('student-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudentHome],
      html: `<student-home></student-home>`,
    });
    expect(page.root).toEqualHtml(`
      <student-home>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </student-home>
    `);
  });
});
