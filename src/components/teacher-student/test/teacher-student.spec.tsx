import { newSpecPage } from '@stencil/core/testing';
import { TeacherStudent } from '../teacher-student';

describe('teacher-student', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeacherStudent],
      html: `<teacher-student></teacher-student>`,
    });
    expect(page.root).toEqualHtml(`
      <teacher-student>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </teacher-student>
    `);
  });
});
