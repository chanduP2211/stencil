import { newE2EPage } from '@stencil/core/testing';

describe('teacher-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<teacher-home></teacher-home>');

    const element = await page.find('teacher-home');
    expect(element).toHaveClass('hydrated');
  });
});
