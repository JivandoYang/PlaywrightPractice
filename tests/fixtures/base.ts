import {test as base} from "@playwright/test";
import LoginPage from "../web/pages/LoginPage.spec";
import RegisterPage from "../web/pages/RegisterPage.spec";
import HomePage from "../web/pages/HomePage.spec";


const baseURL:string = "https://automationexercise.com/login";

type WebFixtures = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
    homePage: HomePage;
}

export const test = base.extend<WebFixtures>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async({page}, use) => {
        await use(new RegisterPage(page));
    },
    homePage: async({page}, use) => {
        await use(new HomePage(page));
    },
})

export { expect } from '@playwright/test';