const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach("Open website on every test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test("login HR Orange with valid username and password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  loginPage.logintoAccount("Admin", "admin123");
  const dashboard = page.getByRole("heading", { name: "Dashboard" });

  await expect(dashboard).toBeVisible();
});

test("login with invalid username and password", async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.logintoAccount("invalidUser", "wrongPassword");

  const errMsg = page.getByText("Invalid credentials");

  await expect(errMsg).toBeVisible();
});

test("login with blank username and password", async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.logintoAccount("", "");

  const errMsgRequired = page.getByText("Required");

  await expect(errMsgRequired).toHaveCount(2);
});
