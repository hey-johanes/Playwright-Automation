class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.buttonSubmit = page.getByRole("button", { name: "Login" });
  }

  async navigatetoLogin(url) {
    await this.page.goto(url);
  }

  async logintoAccount(userName, password) {
    await this.username.fill(userName);
    await this.password.fill(password);
    await this.buttonSubmit.click();
  }
}
module.exports = LoginPage;
