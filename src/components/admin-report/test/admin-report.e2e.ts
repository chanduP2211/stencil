import { newE2EPage } from '@stencil/core/testing';

describe('admin-report', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admin-report></admin-report>');

    const element = await page.find('admin-report');
    expect(element).toHaveClass('hydrated');
  });
});
