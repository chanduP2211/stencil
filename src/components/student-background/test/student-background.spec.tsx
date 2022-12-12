import { newSpecPage } from '@stencil/core/testing';
import { StudentBackground } from '../student-background';

describe('student-background', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudentBackground],
      html: `<student-background></student-background>`,
    });
    expect(page.root).toEqualHtml(`
      <student-background>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </student-background>
    `);
  });
});
