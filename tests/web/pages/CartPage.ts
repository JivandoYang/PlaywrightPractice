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
    readonly checkoutBtn: Locator;
    readonly loginOrRegister: Locator;
    readonly removeItemBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartRows = page.locator('tr[id^="product-"]');
        this.quantityInput = page.locator('#quantity');
        this.removeItemBtn = page.locator('a.cart_quantity_delete');
        this.checkoutBtn = page.getByText('Proceed To Checkout');
        this.loginOrRegister = page.getByRole('link', { name: 'Register / Login' })
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

    async clickCheckoutBtn(){
        await this.checkoutBtn.click();
    }

    async clickRemoveItem(){
        await this.removeItemBtn.click();
    }

    async clearCart() {
        while (await this.removeItemBtn.count() > 0) {
            await this.removeItemBtn.first().click();
        }
    }

    async validateLoginAndRegister(){
        await expect(this.loginOrRegister).toBeVisible();
    }
}