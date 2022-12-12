import { newE2EPage } from '@stencil/core/testing';

describe('student-attendance', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<student-attendance></student-attendance>');

    const element = await page.find('student-attendance');
    expect(element).toHaveClass('hydrated');
  });
});
