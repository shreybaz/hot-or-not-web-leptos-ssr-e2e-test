import { test, expect } from '@playwright/test';

test.describe('Comprehensive Website Testing', () => {
    // Test case for basic navigation and title verification
    test('navigate to the home page and check the title', async ({ page }) => {
        await page.goto('https://yral.com');
        await expect(page).toHaveTitle('Yral');
    });

    // Test interaction with elements, like clicking a button
    test('click some button and verify response', async ({ page }) => {
        await page.goto('https://example.com');
        const button = page.locator('text=More information');
        await button.click();
        // Verify some response here, e.g., navigation, text change, etc.
        await expect(page).toHaveURL(/more-information/);
    });

    // Form submission test case
    test('should fill and submit a form', async ({ page }) => {
        await page.goto('https://example.com');
        await page.fill('input[name="firstName"]', 'John');
        await page.fill('input[name="lastName"]', 'Doe');
        await page.click('text=Submit');
        // Verify submission result
        await expect(page.locator('text=Thank you')).toBeVisible();
    });

    // Test loading and element visibility
    test('should ensure specific elements are visible', async ({ page }) => {
        await page.goto('https://example.com');
        const importantElement = page.locator('#important-element');
        await expect(importantElement).toBeVisible();
    });

    // Handling multiple pages or popups
    test('should handle multiple pages or popups', async ({ page, context }) => {
        await page.goto('https://example.com');
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click('text=Open New Tab')  // Assumes this opens a new tab
        ]);
        await expect(newPage).toHaveURL(/new-tab-content/);
        await newPage.close();
    });

    // Test for responsiveness
    test('should check responsiveness of the website', async ({ page }) => {
        await page.goto('https://example.com');
        await page.setViewportSize({ width: 320, height: 480 });  // Simulate mobile size
        const mobileMenu = page.locator('#mobile-menu');
        await expect(mobileMenu).toBeVisible();
    });
});

