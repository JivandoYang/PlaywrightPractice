import {test, expect} from "../../fixtures/base";

test('valid contact', async ({ contactPage,homePage,page }) => {
    await homePage.clickContactIcon();
    await contactPage.fillForm({name: "test", email:"test123@gmail.com", subject:"test subject", message: "test message"})
    // await contactPage.uploadFile();
    await page.pause();
    page.on('dialog', dialog => {
        console.log(dialog.type())
        console.log(dialog.message())
        dialog.accept();
    });
    await contactPage.clickSumbitBtn();
    await expect(contactPage.successText).toBeVisible();
    await contactPage.clickHomeBtn();
    await expect(page).toHaveURL('https://automationexercise.com');
})
