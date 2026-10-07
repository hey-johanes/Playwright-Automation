const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");

test.use({ storageState: { cookies: [], origins: [] } });

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navigatetoLogin(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test("login HR Orange with valid username and password", async ({ page }) => {
  loginPage.logintoAccount("Admin", "admin123");
  const dashboard = page.getByRole("heading", { name: "Dashboard" });

  await expect(dashboard).toBeVisible();
});

test("login with invalid username and password", async ({ page }) => {
  loginPage.logintoAccount("invalidUser", "wrongPassword");

  const errMsg = page.getByText("Invalid credentials");

  await expect(errMsg).toBeVisible();
});

test("login with blank username and password", async ({ page }) => {
  loginPage.logintoAccount("", "");

  const errMsgRequired = page.getByText("Required");

  await expect(errMsgRequired).toHaveCount(2);
});
