import { newSpecPage } from '@stencil/core/testing';
import { GridCompo } from '../grid-compo';

describe('grid-compo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GridCompo],
      html: `<grid-compo></grid-compo>`,
    });
    expect(page.root).toEqualHtml(`
      <grid-compo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </grid-compo>
    `);
  });
});
