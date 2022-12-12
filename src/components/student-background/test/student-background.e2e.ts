import { newE2EPage } from '@stencil/core/testing';

describe('student-background', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<student-background></student-background>');

    const element = await page.find('student-background');
    expect(element).toHaveClass('hydrated');
  });
});
