import { newE2EPage } from '@stencil/core/testing';

describe('student-report', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<student-report></student-report>');

    const element = await page.find('student-report');
    expect(element).toHaveClass('hydrated');
  });
});
