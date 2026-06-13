import {test, expect} from "../../fixtures/base";

const randomEmail = `test${Date.now()}@gmail.com`;

test.describe('register', () => {
    test('valid register', async ({ registerPage, homePage }) => {
        await homePage.clickSignup();
        await registerPage.fillRegisterForm({
            username: 'test123',
            email: randomEmail
        });
        await registerPage.fillAccountInfo({
            gender: 'Mr',
            password: '123456',
            day: '10',
            month: 'May',
            year: '2000'
        });
        await registerPage.fillAddressInfo({
            firstName: 'Test',
            lastName: 'User',
            company: 'ABC Company',
            address: 'Jl. Testing No 1',
            address2: 'Block A',
            country: 'Singapore',
            state: 'Riau',
            city: 'Pekanbaru',
            zipcode: '12345',
            mobileNumber: '08123456789'
        });
        await registerPage.clickCreate();
        await expect(registerPage.successfulText).toBeVisible();
        await registerPage.clickContinue();
    });
});

test('register with existing email', async ({ registerPage, homePage }) => {
    await homePage.clickSignup();
    await registerPage.fillRegisterForm({
            username: 'test123',
            email: "LoginTest@gmail.com"
    });
    await expect(registerPage.warningText).toBeVisible();
})

