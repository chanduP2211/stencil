import { newSpecPage } from '@stencil/core/testing';
import { StudentReport } from '../student-report';

describe('student-report', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudentReport],
      html: `<student-report></student-report>`,
    });
    expect(page.root).toEqualHtml(`
      <student-report>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </student-report>
    `);
  });
});
