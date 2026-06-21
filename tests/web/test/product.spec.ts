import { test } from "../../fixtures/base";

test('Verify Product and Product detail page', async ({ ProductPage, ProductDetailsPage, homePage }) => {
    await homePage.clickProductIcon();
    await ProductPage.verifyPageLoaded();
    await ProductPage.verifyProductsVisible();
    await ProductPage.clickFirstViewProduct();
    await ProductDetailsPage.verifyProductDetails();
})

test('Adding product to cart', async ({ ProductPage, homePage, cartPage }) => {
    await homePage.clickProductIcon();
    await ProductPage.verifyPageLoaded();
    await ProductPage.verifyProductsVisible();
    await ProductPage.addProductToCart(0);
    await ProductPage.addProductToCart(1);
    await homePage.clickCartIcon();
    await cartPage.verifyProduct(0, {
        name: 'Blue Top',
        price: 500,
        quantity: 1
    });
    await cartPage.verifyProduct(1, {
        name: 'Men Tshirt',
        price: 400,
        quantity: 1
    });
})

test('Adding item quantity in cart to 4', async ({ ProductPage, homePage, cartPage, ProductDetailsPage }) => {
    await homePage.clickProductIcon();
    await ProductPage.verifyPageLoaded();
    await ProductPage.verifyProductsVisible();
    await ProductPage.clickFirstViewProduct();
    await ProductDetailsPage.verifyProductDetails();
    await ProductDetailsPage.setQuantity(4);
    await ProductDetailsPage.addToCart();
    await ProductDetailsPage.clickViewCart();
    await cartPage.verifyProduct(0, {
        name: 'Blue Top',
        price: 500,
        quantity: 4
    });
})
