import { Page, type Locator } from '@playwright/test';

export default class LoginPage {
    readonly page: Page;
    readonly loginOrSignUp: Locator;
    readonly loginBtn: Locator;
    readonly signupBtn: Locator;
    readonly emailLoginField: Locator;
    readonly passwordField: Locator;
    readonly usernameField: Locator;
    readonly emailSignupField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginOrSignUp = page.getByRole('link',{name: 'Signup / Login'})
        this.loginBtn = page.getByRole('button',{name: 'Login'})
        this.signupBtn = page.getByRole('button',{name: 'Signup'})
        this.emailLoginField = page.locator('[data-qa="login-email"]')
        this.passwordField = page.getByPlaceholder('Password')
        this.usernameField = page.getByPlaceholder('Name')
        this.emailSignupField = page.locator('[data-qa="signup-email"]')
    }

    async clickSignupIcon(){
        await this.loginOrSignUp.click();
    }

    async fillUsername(username:string){
        await this.usernameField.fill(username);
    }

    async fillPassword(password:string){
        await this.passwordField.fill(password);
    }

    async fillEmailLogin(email:string){
        await this.emailLoginField.fill(email);
    }

    async fillEmailSignup(email:string){
        await this.emailSignupField.fill(email);
    }

    async clickButtonLogin() {
        await this.loginBtn.click();
    }

    async clickButtonSignup() {
        await this.signupBtn.click();
    }
}