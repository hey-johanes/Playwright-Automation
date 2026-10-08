// const { test, expect } = require("@playwright/test");

// test.describe("Test to create new user", () => {
//   test("Goto page add new user", async ({ page }) => {
//     await page.goto(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
//     );

//     await page
//       .locator(".oxd-main-menu-item-wrapper")
//       .filter({ hasText: "Admin" })
//       .click();
//     await page.getByRole("button", { name: " Add" }).click();

//     await expect(page.getByRole("heading", { name: "Add User" })).toBeVisible();
//   });

//   test("Create new user", async ({ page }) => {
//     await page.getByText("-- Select --").first().click();
//     await page.getByRole("textbox", { name: "Type for hints..." }).fill("s");
//     await page.getByRole("textbox").nth(2).fill("username");
//     await page.getByRole("textbox").nth(3).fill("password1");
//     await page.getByRole("textbox").nth(4).fill("password1");
//     await page.getByRole("button", { name: "Save" }).click();
//     await page.getByText("Success", { exact: true }).click();
//   });
// });
