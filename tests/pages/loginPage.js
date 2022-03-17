exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.URL = '/sampleapp';
    this.loginField = page.locator('[name="UserName"]');
    this.passwordField = page.locator('[name="Password"]');
    this.loginButton = page.locator('[id="login"]');
    this.logoutButton = page.locator('//*[@id="login" and text()="Log Out"]');
    this.loginStatus = page.locator('[id="loginstatus"]');
  }

  async goto() {
    await this.page.goto(this.URL);
  }

  async login(userName, password) {
    await this.loginField.fill(userName);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
};
