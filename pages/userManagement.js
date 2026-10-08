class UserManagement {
  constructor(page) {
    this.page = page;
    this.userNameInput = page
      .locator(".oxd-input-group")
      .filter({ hasText: "Username" })
      .locator("input");
    this.buttonSearch = page.getByRole("button", { name: "Search" });
    this.sideBarAdmin = page
      .locator(".oxd-main-menu-item-wrapper")
      .filter({ hasText: "Admin" })
      .click();
  }

  async gotoUserManamgentPage(url) {
    await this.page.goto(url);
  }

  async searchUserData(userName) {
    await this.userNameInput.fill(userName);
    await this.buttonSearch.click();
  }
}

module.exports = UserManagement;
