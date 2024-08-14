// src/pages/LoginPage.ts

import {Page, expect} from '@playwright/test';
import {LoginElements} from '../elements/LoginElements';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/');
    }

    async verifyTitle() {
        await expect(await this.page.title()).toBe(LoginElements.title);
        // await expect(await this.page.title()).toBe('Swag Labs');
    }

    async login(username: string, password: string) {
        await this.page.locator(LoginElements.usernameInput).fill(username);
        await this.page.locator(LoginElements.passwordInput).fill(password);
        await this.page.locator(LoginElements.loginButton).click();
    }

    async verifyLoginSuccess() {
        await expect(await this.page.url()).toBe(LoginElements.messageSucessLogin);
    }

    async verifyLoginUsernameIncorret() {
        await expect(this.page.locator(LoginElements.errorUsername)).toContainText(LoginElements.messageErrorUserName);
    }
}
