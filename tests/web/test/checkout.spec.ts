import { test } from "../../fixtures/base";

test('valid checkout', async ({ ProductPage, homePage, cartPage, loginPage, checkoutPage, paymentPage }) => {
    await homePage.clickSignup();
    await loginPage.fillLoginForm({email: "LoginTest@gmail.com", password:"test123"})
    await homePage.clickCartIcon();
    await cartPage.clearCart();
    await homePage.clickProductIcon();
    await ProductPage.addProductToCart(0);
    await homePage.clickCartIcon();
    await cartPage.verifyProduct(0, {
        name: 'Blue Top',
        price: 500,
        quantity: 1
    });
    await cartPage.clickCheckoutBtn();
    await checkoutPage.validationCheckoutPage();
    await checkoutPage.placeComment("Lorem Ipsum");
    await checkoutPage.placeOrder();
    await paymentPage.Payment();
    await paymentPage.ValidateSuccessfulPayment();
})

test('checkout without login', async ({ ProductPage, homePage, cartPage, loginPage, checkoutPage, paymentPage }) => {
    await homePage.clickSignup();
    await homePage.clickProductIcon();
    await ProductPage.addProductToCart(0);
    await homePage.clickCartIcon();
    await cartPage.verifyProduct(0, {
        name: 'Blue Top',
        price: 500,
        quantity: 1
    });
    await cartPage.validateLoginAndRegister();
})

