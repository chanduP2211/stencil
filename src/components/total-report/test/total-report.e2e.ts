import { newE2EPage } from '@stencil/core/testing';

describe('total-report', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<total-report></total-report>');

    const element = await page.find('total-report');
    expect(element).toHaveClass('hydrated');
  });
});
