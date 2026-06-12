import {test, expect} from "../../fixtures/base";

test('valid-login', async ({ homePage,loginPage,page }) => {
    await page.goto("https://automationexercise.com")
    await homePage.clickSignup();
    await loginPage.fillLoginForm({email: "LoginTest@gmail.com", password:"test123"})
    await expect(homePage.logoutIcon).toBeVisible();
})

test.describe('invalid login', () => {
    test('missing-email', async ({ homePage,loginPage,page }) => {
        await page.goto("https://automationexercise.com")
        await homePage.clickSignup();
        await loginPage.fillLoginForm({email: "", password:"test123"})
        await expect(loginPage.emailField).toHaveJSProperty('validity.valid', false);
    })
    test('missing-password', async ({ homePage,loginPage,page }) => {
        await page.goto("https://automationexercise.com")
        await homePage.clickSignup();
        await loginPage.fillLoginForm({email: "LoginTest@gmail.com", password:""})
        await expect(loginPage.passwordField).toHaveJSProperty('validity.valid', false);
    })
    test('wrong-email-or-password', async ({ homePage,loginPage,page }) => {
        await page.goto("https://automationexercise.com")
        await homePage.clickSignup();
        await loginPage.fillLoginForm({email: "wrongemail@gmail.com", password:"wrongpassword"})
        await expect(loginPage.warningInvalid).toBeVisible();
    })
})
