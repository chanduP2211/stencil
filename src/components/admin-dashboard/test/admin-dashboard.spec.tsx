import { newSpecPage } from '@stencil/core/testing';
import { AdminDashboard } from '../admin-dashboard';

describe('admin-dashboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdminDashboard],
      html: `<admin-dashboard></admin-dashboard>`,
    });
    expect(page.root).toEqualHtml(`
      <admin-dashboard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </admin-dashboard>
    `);
  });
});
