import { newSpecPage } from '@stencil/core/testing';
import { TotalReport } from '../total-report';

describe('total-report', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TotalReport],
      html: `<total-report></total-report>`,
    });
    expect(page.root).toEqualHtml(`
      <total-report>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </total-report>
    `);
  });
});
