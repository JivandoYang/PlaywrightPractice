import {test, expect} from "../../fixtures/base";

test('logout', async ({ loginPage,homePage,page }) => {
    await homePage.clickSignup();
    await loginPage.fillLoginForm({email: "LoginTest@gmail.com", password:"test123"})
    await expect(homePage.LoggedInAs).toBeVisible();
    await homePage.logoutIcon.click();
    await expect(page.getByText("Login to your account")).toBeVisible();
})
