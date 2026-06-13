import { Page, type Locator } from '@playwright/test';

export default class HomePage {
    readonly page: Page;
    readonly loginOrRegisterIcon: Locator;
    readonly logoutIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginOrRegisterIcon = page.getByRole('link',{name: 'Signup / Login'})
        this.logoutIcon = page.getByRole('link',{name:" Logout"});
    }

    async clickSignup(){
        await this.loginOrRegisterIcon.click();
    }

    async clickLogoutIcon(){
        await this.logoutIcon.click();
    }

}