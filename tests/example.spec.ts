import { test, expect } from '@playwright/test';

test('Truy cập trang web', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('Truy cập trang', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click Bài học 1: Register Page link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page to have a heading with the name of "User Registration".
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
