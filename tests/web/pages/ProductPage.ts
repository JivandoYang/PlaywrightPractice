import { Page, expect, Locator } from "@playwright/test";

export default class ProductPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly productCards: Locator;
    readonly productName: Locator;
    readonly viewProducts: Locator;
    readonly search: Locator;
    readonly searchBtn: Locator;
    readonly continueShoppingBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByRole('heading', { name: 'All Products' });
        this.productCards = page.locator('.product-image-wrapper');
        this.productName = page.locator('.productinfo p');
        this.viewProducts = page.getByRole('link', { name: 'View Product' });
        this.search = page.getByPlaceholder("Search Product");
        this.searchBtn = page.locator('#submit_search');
        this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
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

    async searchProduct(keyword: string) {
        await this.search.fill(keyword);
        await this.searchBtn.click();
    }

    async testFilter(filterText: string) {
        const normalize = (text: string) => text.toLowerCase().replace(/[-\s]/g, '');
        const productNames = await this.productName.allTextContents();
        for (const name of productNames) {
            expect(normalize(name)).toContain(normalize(filterText));
        }
    }

    async addProductToCart(index: number) {
        const card = this.productCards.nth(index);
        await card.scrollIntoViewIfNeeded();
        await card.hover();
        await card.locator('.overlay-content .add-to-cart').click();
        await this.continueShoppingBtn.click();
    }
}