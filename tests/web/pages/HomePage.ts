import { Page, type Locator } from '@playwright/test';

export default class HomePage {
    readonly page: Page;
    readonly loginOrRegisterIcon: Locator;
    readonly logoutIcon: Locator;
    readonly LoggedInAs: Locator;
    readonly ContactUsIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginOrRegisterIcon = page.getByRole('link',{name: 'Signup / Login'})
        this.logoutIcon = page.getByRole('link',{name:" Logout"});
        this.LoggedInAs = page.getByText(/Logged in as/i);
        this.ContactUsIcon = page.getByRole('link',{name:" Contact us"})
    }

    async clickSignup(){
        await this.loginOrRegisterIcon.click();
    }

    async clickLogoutIcon(){
        await this.logoutIcon.click();
    }

    async clickContactIcon(){
        await this.ContactUsIcon.click();
    }
}