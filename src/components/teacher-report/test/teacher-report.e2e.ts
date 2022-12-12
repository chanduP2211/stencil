import { newE2EPage } from '@stencil/core/testing';

describe('teacher-report', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<teacher-report></teacher-report>');

    const element = await page.find('teacher-report');
    expect(element).toHaveClass('hydrated');
  });
});
