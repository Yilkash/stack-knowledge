import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('StackKnowledge');
  });

  test('should navigate to resources page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Browse Resources');
    await expect(page).toHaveURL('/resources');
  });

  test('should connect wallet button be visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Connect Wallet')).toBeVisible();
  });
});
