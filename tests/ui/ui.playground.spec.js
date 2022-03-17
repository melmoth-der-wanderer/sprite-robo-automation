const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

const { LoginPage } = require('../pages/loginPage');

test.describe('Login UI tests', () => {
  test('Valid login', async ({ page }) => {
    const userName = faker.name.lastName();
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userName, 'pwd');
    await expect(loginPage.loginStatus).toHaveText(`Welcome, ${userName}!`);
  });

  test('Empty fields validation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(loginPage.loginStatus).toHaveText('Invalid username/password');
  });

  test('Wrong credentials validation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(faker.name.lastName(), 'cwd');
    await expect(loginPage.loginStatus).toHaveText('Invalid username/password');
  });

  test('Logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step('Precondition', async () => {
      const userName = faker.name.lastName();
      await loginPage.goto();
      await loginPage.login(userName, 'pwd');
      await expect(loginPage.loginStatus).toHaveText(`Welcome, ${userName}!`);
    });
    await loginPage.logoutButton.click();
    await expect(loginPage.loginStatus).toHaveText('User logged out.');
  });
});
