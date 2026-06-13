import { Page, expect, type Locator } from '@playwright/test';

type LoginData = {
    email?: string;
    password?: string;
}

export default class LoginPage {
    readonly page: Page;
    readonly loginBtn: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly warningInvalid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginBtn = page.getByRole('button',{name: 'Login'});
        this.emailField = page.locator('[data-qa="login-email"]');
        this.passwordField = page.getByPlaceholder('Password');
        this.warningInvalid = page.locator('p', { hasText: 'Your email or password is incorrect!' });
    }

    async fillLoginForm(data: LoginData){
        if(data.email) await this.emailField.fill(data.email);
        if(data.password) await this.passwordField.fill(data.password);
        await this.loginBtn.click();
    }

    async expectEmailRequiredValidation(message: string = 'Please fill out this field.') {
        const validationMessage = await this.emailField.evaluate((el: HTMLInputElement) => {
            return el.validationMessage;
        });

        expect(validationMessage).toBe(message);
    }
}