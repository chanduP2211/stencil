import { newSpecPage } from '@stencil/core/testing';
import { AdminReport } from '../admin-report';

describe('admin-report', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdminReport],
      html: `<admin-report></admin-report>`,
    });
    expect(page.root).toEqualHtml(`
      <admin-report>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </admin-report>
    `);
  });
});
