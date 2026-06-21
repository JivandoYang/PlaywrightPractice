import { Page, expect, type Locator } from '@playwright/test';

interface CartProduct {
    name: string;
    price: number;
    quantity: number;
}

export default class CartPage {
    readonly page: Page;
    readonly cartRows: Locator;
    readonly quantityInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartRows = page.locator('tr[id^="product-"]');
        this.quantityInput = page.locator('#quantity');
    }

    async verifyProduct(index: number, expected: CartProduct) {
        const row = this.cartRows.nth(index);
        const name = await row.locator('.cart_description a').textContent();
        const price = Number((await row.locator('.cart_price p').textContent()) ?.replace(/\D/g, ''));
        const quantity = Number(await row.locator('.cart_quantity button').textContent());
        const total = Number((await row.locator('.cart_total p').textContent()) ?.replace(/\D/g, ''));

        expect(name).toContain(expected.name);
        expect(price).toBe(expected.price);
        expect(quantity).toBe(expected.quantity);
        expect(total).toBe(expected.price * expected.quantity);
    }

    async setQuantity(quantity: number) {
        await this.quantityInput.fill(quantity.toString());
    }
}