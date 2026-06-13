import { Page, type Locator } from '@playwright/test';

type RegisterData = Partial<{
    username: string;
    email: string;
}>;

type AccountInfoData = {
    gender: 'Mr' | 'Mrs';
    password: string;
    day?: string;
    month?: string;
    year?: string;
};

type AddressInfoData = Partial<{
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
}>;

export default class RegisterPage {
    readonly page: Page;
    readonly registerBtn: Locator;
    readonly usernameField: Locator;
    readonly emailField: Locator;

    // Account Information
    readonly mrRadio: Locator;
    readonly mrsRadio: Locator;
    readonly passwordField: Locator;
    readonly dayDate: Locator;
    readonly monthDate: Locator;
    readonly yearDate: Locator;
    
    // Address Information
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly companyField: Locator;
    readonly addressField: Locator;
    readonly address2Field: Locator;
    readonly countryDropdown: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipcodeField: Locator;
    readonly mobileNumberField: Locator;
    readonly successfulText: Locator;
    readonly createBtn: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerBtn = page.getByRole('button',{name: 'Signup'})
        this.usernameField = page.getByPlaceholder('Name')
        this.emailField = page.locator('[data-qa="signup-email"]')
        this.mrRadio = page.getByLabel('Mr.')
        this.mrsRadio = page.getByLabel('Mrs.')
        this.passwordField = page.getByLabel('password')
        this.dayDate = page.locator("#days") 
        this.monthDate = page.locator("#months")
        this.yearDate = page.locator('#years')
        this.firstNameField = page.getByLabel('First name *')
        this.lastNameField = page.getByLabel('Last name *')
        this.companyField = page.getByRole('textbox', { name: 'Company', exact: true })
        this.addressField = page.getByLabel('Address * (Street address, P.');
        this.address2Field = page.getByLabel('Address 2');
        this.countryDropdown = page.getByLabel('Country *');
        this.stateField = page.getByLabel('State *');
        this.cityField = page.getByLabel('City *');
        this.zipcodeField = page.locator('#zipcode');
        this.mobileNumberField = page.getByLabel('Mobile Number *');
        this.successfulText = page.locator('[data-qa="account-created"]')
        this.createBtn = page.getByRole('button',{name: "Create Account"})
        this.continueBtn = page.locator('[data-qa="continue-button"]');
    }

    async fillRegisterForm(data: RegisterData) {
        if (data.username) await this.usernameField.fill(data.username);
        if (data.email) await this.emailField.fill(data.email);
        await this.registerBtn.click();
    }

    async fillAccountInfo(data: AccountInfoData) {
        if (data.gender === 'Mr') {
            await this.mrRadio.check();
        } else if (data.gender === 'Mrs') {
            await this.mrsRadio.check();
        }
        await this.passwordField.fill(data.password);
        if (data.day) await this.dayDate.selectOption(data.day);
        if (data.month) await this.monthDate.selectOption(data.month);
        if (data.year) await this.yearDate.selectOption(data.year);
    }

    async fillAddressInfo(data: AddressInfoData) {
        if (data.firstName) await this.firstNameField.fill(data.firstName);
        if (data.lastName) await this.lastNameField.fill(data.lastName);
        if (data.company) await this.companyField.fill(data.company);
        if (data.address) await this.addressField.fill(data.address);
        if (data.address2) await this.address2Field.fill(data.address2);
        if (data.country) await this.countryDropdown.selectOption(data.country);
        if (data.state) await this.stateField.fill(data.state);
        if (data.city) await this.cityField.fill(data.city);
        if (data.zipcode) await this.zipcodeField.fill(data.zipcode);
        if (data.mobileNumber) await this.mobileNumberField.fill(data.mobileNumber);
    }

    async clickCreate(){
        await this.createBtn.click();
    }

    async clickContinue(){
        await this.continueBtn.click();
    }
}