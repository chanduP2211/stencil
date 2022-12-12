import { newSpecPage } from '@stencil/core/testing';
import { TeacherBackground } from '../teacher-background';

describe('teacher-background', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeacherBackground],
      html: `<teacher-background></teacher-background>`,
    });
    expect(page.root).toEqualHtml(`
      <teacher-background>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </teacher-background>
    `);
  });
});
