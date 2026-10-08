const { expect, test } = require("@playwright/test");
const UserManagement = require("../pages/userManagement");

let userManagement;

test.beforeEach("Login to HR web", async ({ page }) => {
  userManagement = new UserManagement(page);
  await userManagement.gotoUserManamgentPage(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );
  await expect(
    page.getByRole("heading", { name: "User Management" }),
  ).toBeVisible();
});

test("Search data user with data valid", async ({ page }) => {
  await userManagement.searchUserData("Admin");

  await expect(page.getByText("Admin").nth(2)).toBeVisible();
});

test("Search data user with data invalid", async ({ page }) => {
  await userManagement.searchUserData("Admin Invalid");

  const noRecordsFound = page
    .locator("span")
    .filter({ hasText: "No Records Found" });

  await expect(noRecordsFound).toBeVisible();
});
