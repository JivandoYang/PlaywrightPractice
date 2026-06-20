import { Page, type Locator } from '@playwright/test';

export default class HomePage {
    readonly page: Page;
    readonly loginOrRegisterIcon: Locator;
    readonly logoutIcon: Locator;
    readonly LoggedInAs: Locator;
    readonly ContactUsIcon: Locator;
    readonly TestCaseIcon: Locator;
    readonly ProductIcon: Locator
    readonly CartIcon: Locator

    constructor(page: Page) {
        this.page = page;
        this.loginOrRegisterIcon = page.getByRole('link',{name: 'Signup / Login'})
        this.logoutIcon = page.getByRole('link',{name:" Logout"});
        this.LoggedInAs = page.getByText(/Logged in as/i);
        this.ContactUsIcon = page.getByRole('link',{name:" Contact us"})
        this.TestCaseIcon = page.getByRole('link', { name: ' Test Cases' });
        this.ProductIcon =  page.getByRole('link', { name: ' Products' });
        this.CartIcon =  page.getByRole('link', { name: ' Cart' })
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

    async clickTestCaseIcon(){
        await this.TestCaseIcon.click();
    }

    async clickProductIcon(){
        await this.ProductIcon.click();
    }

    async clickCartIcon(){
        await this.CartIcon.click();
    }
}