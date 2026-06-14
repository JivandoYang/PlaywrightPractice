import {test, expect} from "../../fixtures/base";

test('Verify Product and Product detail page', async ({ ProductPage,ProductDetailsPage,homePage }) => {
    await homePage.clickProductIcon();
    await ProductPage.verifyPageLoaded();
    await ProductPage.verifyProductsVisible();
    await ProductPage.clickFirstViewProduct();
    await ProductDetailsPage.verifyProductDetails();
})
