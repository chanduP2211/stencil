import { newE2EPage } from '@stencil/core/testing';

describe('student-signup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<student-signup></student-signup>');

    const element = await page.find('student-signup');
    expect(element).toHaveClass('hydrated');
  });
});
