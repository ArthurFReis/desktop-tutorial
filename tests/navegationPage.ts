
import { Page, expect, Locator, GetByPlaceHolder } from '@playwright/test';
export class NavegationPage {
    
    readonly page: Page;

    readonly userename: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    readonly useario: GetByPlaceHolder;
    readonly senha: GetByPlaceHolder;

    constructor(page: Page){
        this.page = page;
        
        this.userename = this.page.locator('[data-test="username"]');
        this.password = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');

        this.useario = this.page.getByPlaceholder('Username');
        this.senha = this.page.getByPlaceholder('Password');

    }

    async saucedemo(){
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    }

} 