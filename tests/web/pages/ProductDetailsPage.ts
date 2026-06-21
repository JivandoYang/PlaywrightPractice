import { Page, Locator, expect } from "@playwright/test";

export default class ProductDetailsPage {
    readonly page: Page;
    readonly productName: Locator;
    readonly category: Locator;
    readonly price: Locator;
    readonly availabity: Locator;
    readonly condition: Locator;
    readonly brand: Locator;
    readonly inputQuantity: Locator;
    readonly addCartBtn: Locator;
    readonly viewCartBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('.product-information h2');
        this.category = page.locator('.product-information p').filter({ hasText: 'Category' });
        this.price = page.locator('.product-information span span');
        this.availabity = page.getByText('Availability:');
        this.condition = page.getByText('Condition:');
        this.brand = page.getByText('Brand:');
        this.inputQuantity = page.locator('input#quantity');
        this.addCartBtn = page.getByRole('button',{name: " Add to cart"});
        this.viewCartBtn = page.getByRole('link', {name: /View Cart/i});
    }

    async setQuantity(quantity: number) {
        await this.inputQuantity.fill(quantity.toString());
    }

    async addToCart(){
        await this.addCartBtn.click();
    }

    async clickViewCart() {
        await expect(this.viewCartBtn).toBeVisible();
        await this.viewCartBtn.click();
    }

    async verifyProductDetails() {
        await expect(this.productName).toBeVisible();
        await expect(this.category).toBeVisible();
        await expect(this.price).toBeVisible();
        await expect(this.availabity).toBeVisible();
        await expect(this.condition).toBeVisible();
        await expect(this.brand).toBeVisible();
    }
}