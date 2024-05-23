import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yral.com/');
  await page.goto('https://yral.com/hot-or-not/3o3gd-uqaaa-aaaal-qecyq-cai/1');
  await page.getByRole('link').nth(2).click();
  await page.getByRole('navigation').getByRole('link').nth(2).click();
  await page.getByRole('link').nth(2).press('Control+Shift+I');
  await page.getByText('Upload Click to upload or').click();
  await page.getByLabel('NSFW').press('Control+Shift+I');
  await page.getByText('Upload Click to upload or').click({
    button: 'right'
  });
  await page.goto('https://yral.com/upload');
  await page.getByText('Click to upload or drag and drop Video File (Max 60s)').click();
  await page.locator('body').setInputFiles('test4.mp4');
  await page.locator('video').click();
  await page.locator('video').setInputFiles('test4.mp4');
});