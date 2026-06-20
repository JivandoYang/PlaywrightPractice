import {test as base} from "@playwright/test";
import LoginPage from "../web/pages/LoginPage";
import RegisterPage from "../web/pages/RegisterPage";
import HomePage from "../web/pages/HomePage";
import ContactPage from "../web/pages/ContactPage";
import ProductPage from "../web/pages/ProductPage";
import ProductDetailsPage from "../web/pages/ProductDetailsPage";
import CartPage from "../web/pages/CartPage";
const baseURL:string = "https://automationexercise.com";

type WebFixtures = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
    homePage: HomePage;
    contactPage: ContactPage;
    ProductPage: ProductPage;
    ProductDetailsPage: ProductDetailsPage;
    cartPage: CartPage;
}

export const test = base.extend<WebFixtures>({
    homePage: async({page}, use) => {
        await page.goto(baseURL)
        await use(new HomePage(page));
    },
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async({page}, use) => {
        await use(new RegisterPage(page));
    },
    contactPage: async({page}, use) => {
        await use(new ContactPage(page));
    },
    ProductPage: async({page}, use) => {
        await use(new ProductPage(page));
    },
    ProductDetailsPage: async({page}, use) => {
        await use(new ProductDetailsPage(page));
    },
    cartPage: async({page}, use) => {
        await use(new CartPage(page));
    },
})

export { expect } from '@playwright/test';