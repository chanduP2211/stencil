import { newE2EPage } from '@stencil/core/testing';

describe('teacher-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<teacher-profile></teacher-profile>');

    const element = await page.find('teacher-profile');
    expect(element).toHaveClass('hydrated');
  });
});
