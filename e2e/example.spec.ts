import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substrin
  await expect(page).toHaveTitle(/Hello Next App/);
});

test('displays hello next message', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expects page to display "Hello Next" message
  // await expect(page.getByText('Hello Next')).toBeVisible();
  await expect(page.locator('h1').getByText('Hello Next')).toBeVisible();
});
