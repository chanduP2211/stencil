import { newE2EPage } from '@stencil/core/testing';

describe('teacher-signup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<teacher-signup></teacher-signup>');

    const element = await page.find('teacher-signup');
    expect(element).toHaveClass('hydrated');
  });
});
