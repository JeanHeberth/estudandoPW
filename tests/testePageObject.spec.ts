// tests/home.spec.ts

import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test('has title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.verifyTitle();
});

test('get started link', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickGetStarted();
    await homePage.verifyInstallationHeading();
});
