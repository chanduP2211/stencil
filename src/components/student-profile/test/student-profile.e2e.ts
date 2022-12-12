import { newE2EPage } from '@stencil/core/testing';

describe('student-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<student-profile></student-profile>');

    const element = await page.find('student-profile');
    expect(element).toHaveClass('hydrated');
  });
});
