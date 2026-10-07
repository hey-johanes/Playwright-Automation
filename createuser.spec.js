import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByText('-- Select --').first().click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.getByText('-- Select --').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('user1');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('password1');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('password1');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});