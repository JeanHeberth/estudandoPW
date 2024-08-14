// src/config/BrowserConfig.ts

import { chromium, Browser, Page } from '@playwright/test';

export class BrowserConfig {
    private browser: Browser;
    private page: Page;

    async start() {
        this.browser = await chromium.launch({ headless: false }); // Alterar para 'true' em produção
        this.page = await this.browser.newPage();
        return this.page;
    }

    async stop() {
        await this.browser.close();
    }
}
