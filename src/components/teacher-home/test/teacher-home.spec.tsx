import { newSpecPage } from '@stencil/core/testing';
import { TeacherHome } from '../teacher-home';

describe('teacher-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeacherHome],
      html: `<teacher-home></teacher-home>`,
    });
    expect(page.root).toEqualHtml(`
      <teacher-home>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </teacher-home>
    `);
  });
});
