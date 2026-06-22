import { Page, expect } from '@playwright/test';

export default class PaymentPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async Payment(){
        await this.page.locator('input[name="name_on_card"]').fill('test');
        await this.page.locator('input[name="card_number"]').fill('152351235');
        await this.page.getByRole('textbox', { name: 'ex.' }).fill('311');
        await this.page.getByRole('textbox', { name: 'MM' }).fill('06');
        await this.page.getByRole('textbox', { name: 'YYYY' }).fill('2022');
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
    }

    async ValidateSuccessfulPayment(){
        await expect(this.page.getByText('Order Placed!')).toBeVisible();
    }
}