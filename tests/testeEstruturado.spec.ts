// tests/login.spec.ts

import {test} from '@playwright/test';
import {BrowserConfig} from '../src/config/BrowserConfig';
import {LoginPage} from '../src/pages/LoginPage';

let browserConfig: BrowserConfig;
let loginPage: LoginPage;

test.beforeEach(async () => {
    browserConfig = new BrowserConfig();
    const page = await browserConfig.start();
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.verifyTitle();
});


test('the user login with success', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();
    await browserConfig.stop();
});

test('the user login with fail', async () => {
    await loginPage.login('standard_userss', 'secret_sauce');
    await loginPage.verifyLoginUsernameIncorret();
    await browserConfig.stop();
});


