import {test} from "../../fixtures/base";

test('valid search', async ({ ProductPage,homePage }) => {
    await homePage.clickProductIcon();
    await ProductPage.verifyPageLoaded();
    await ProductPage.verifyProductsVisible();
    await ProductPage.searchProduct("TSHirt");
    await ProductPage.testFilter("TSHirt");
})

test('Checking Category', async ({ ProductPage,homePage }) => {
    await homePage.clickProductIcon();
    await ProductPage.verifyPageLoaded();
    await ProductPage.verifyProductsVisible();
    await ProductPage.checkCategory('Women', 'Dress');
    await ProductPage.testFilter("Dress");
    await ProductPage.checkCategory('Men', 'Tshirts');
    await ProductPage.testFilter("TSHirt");
})

test('Checking brand', async ({ ProductPage,homePage }) => {
    await homePage.clickProductIcon();
    await ProductPage.verifyPageLoaded();
    await ProductPage.verifyProductsVisible();
    await ProductPage.checkBrand('POLO');
})
