import { newSpecPage } from '@stencil/core/testing';
import { TeacherProfile } from '../teacher-profile';

describe('teacher-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeacherProfile],
      html: `<teacher-profile></teacher-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <teacher-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </teacher-profile>
    `);
  });
});
