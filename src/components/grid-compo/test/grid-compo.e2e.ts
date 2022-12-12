import { newE2EPage } from '@stencil/core/testing';

describe('grid-compo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<grid-compo></grid-compo>');

    const element = await page.find('grid-compo');
    expect(element).toHaveClass('hydrated');
  });
});
