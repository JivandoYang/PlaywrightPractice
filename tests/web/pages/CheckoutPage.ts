import { Page, expect } from '@playwright/test';

export default class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validationCheckoutPage(){
        await expect(this.page.getByRole('heading', { name: 'Address Details' })).toBeVisible();
    }

    async placeComment(text:string){
        await this.page.locator('textarea[name="message"]').fill(text);
    }

    async placeOrder(){
        await this.page.getByRole('link', { name: 'Place Order' }).click();
    }
}