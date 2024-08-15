import {test} from '@playwright/test';
import {LoginPage} from '../src/pages/LoginPage';


test('the user login with sucess', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.verifyTitle();
    await loginPage.login('standard_users', 'secret_sauce');
    await loginPage.verifyLoginSuccess();
});
