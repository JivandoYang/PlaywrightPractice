import { Page, type Locator } from '@playwright/test';

type contactData = {
    name:string;
    email:string;
    subject?:string;
    message?:string;
}

export default class ContactPage {
    readonly page: Page;
    readonly formTitle: Locator;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly subjectField: Locator;
    readonly messageField: Locator;
    readonly submitBtn: Locator;
    readonly fileField: Locator;
    readonly successText: Locator;
    readonly homeBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formTitle = page.getByRole('link',{name: 'Signup / Login'})
        this.nameField = page.getByPlaceholder('Name')
        this.emailField = page.locator('[data-qa="email"]');
        this.subjectField = page.getByPlaceholder('Subject')
        this.messageField = page.getByPlaceholder('Your Message Here')
        this.submitBtn = page.locator('[data-qa="submit-button"]');
        this.fileField = page.locator('input[type="file"]');
        this.successText = page.locator('div.contact-form .alert.alert-success.status');
        this.homeBtn = page.locator('div.contact-form .btn.btn-success')
    }

    async fillForm(data: contactData){
        await this.nameField.fill(data.name);
        await this.emailField.fill(data.email);
        if(data.subject) await this.subjectField.fill(data.subject);
        if(data.message) await this.messageField.fill(data.message);
    }

    async uploadFile() {
        await this.fileField.setInputFiles('tests/web/files/test.png');
    }

    async clickSumbitBtn(){
        await this.submitBtn.click();
    }

    async clickHomeBtn(){
        await this.homeBtn.click();
    }

}