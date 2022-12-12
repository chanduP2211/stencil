import { newE2EPage } from '@stencil/core/testing';

describe('student-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<student-login></student-login>');

    const element = await page.find('student-login');
    expect(element).toHaveClass('hydrated');
  });
});
