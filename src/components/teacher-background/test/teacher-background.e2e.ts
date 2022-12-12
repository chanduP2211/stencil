import { newE2EPage } from '@stencil/core/testing';

describe('teacher-background', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<teacher-background></teacher-background>');

    const element = await page.find('teacher-background');
    expect(element).toHaveClass('hydrated');
  });
});
