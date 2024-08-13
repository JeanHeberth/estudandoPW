// src/pages/LoginPage.ts

import { Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async verifyTitle() {
       await  expect(await this.page.title()).toBe('Swag Labs')

     }

    async login(username: string, password: string) {
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    }

    async verifyLoginSuccess() {
        await expect(await this.page.url()).toBe("https://www.saucedemo.com/inventory.html");
    }
}
