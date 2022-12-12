import { newE2EPage } from '@stencil/core/testing';

describe('student-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<student-home></student-home>');

    const element = await page.find('student-home');
    expect(element).toHaveClass('hydrated');
  });
});
