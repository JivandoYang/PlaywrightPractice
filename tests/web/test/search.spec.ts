import {test} from "../../fixtures/base";

test('valid search', async ({ ProductPage,homePage }) => {
    await homePage.clickProductIcon();
    await ProductPage.verifyPageLoaded();
    await ProductPage.verifyProductsVisible();
    await ProductPage.searchProduct("TSHirt");
    await ProductPage.testFilter("TSHirt");
})
