import { newSpecPage } from '@stencil/core/testing';
import { TeacherReport } from '../teacher-report';

describe('teacher-report', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeacherReport],
      html: `<teacher-report></teacher-report>`,
    });
    expect(page.root).toEqualHtml(`
      <teacher-report>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </teacher-report>
    `);
  });
});
