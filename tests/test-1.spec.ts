import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await page.getByRole('heading', { name: 'Test Cases', exact: true }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('heading', { name: 'All Products' }).click();
  await page.locator('div').filter({ hasText: 'All Products  Added! Your' }).nth(2).click();
  await page.getByRole('link', { name: ' View Product' }).first().click();
  await page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page.getByRole('heading', { name: 'Blue Top' }).click();
  await page.getByText('Category: Women > Tops').click();
  await page.getByText('Rs.').click();
  
});