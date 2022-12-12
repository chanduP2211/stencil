import { newE2EPage } from '@stencil/core/testing';

describe('teacher-student', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<teacher-student></teacher-student>');

    const element = await page.find('teacher-student');
    expect(element).toHaveClass('hydrated');
  });
});
