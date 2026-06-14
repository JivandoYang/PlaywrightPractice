import { Page, expect, Locator } from "@playwright/test";

export default class ProductPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly productCards: Locator;
    readonly viewProducts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByRole('heading', { name: 'All Products' });
        this.productCards = page.locator('.product-image-wrapper');
        this.viewProducts = page.getByRole('link', { name: 'View Product' });
    }

    async verifyPageLoaded() {
        await expect(this.pageTitle).toBeVisible();
    }

    async verifyProductsVisible() {
        await expect(this.productCards.first()).toBeVisible();
    }

    async clickFirstViewProduct() {
        await this.viewProducts.first().click();
    }
}