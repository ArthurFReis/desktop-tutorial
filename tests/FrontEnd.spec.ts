import { test, expect } from '@playwright/test';


  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

 

  test.describe('login',() => {

     test('Teste de preenchimento correto', async ({ page }) => {
         const usuario =  page.getByPlaceholder("Username");
         await usuario.fill("standard_user")
         await expect(usuario).toHaveValue('standard_user');
         await page.screenshot({path: "Evidencias/preenchimentoCorreto.png"});
          
  });

  test('Teste de preenchimento errado', async ({ page }) => {
         const usuario =  page.getByPlaceholder("Username");
         await usuario.fill("standard_user")
         await page.screenshot({path: "Evidencias/preenchimentoErrado.png"});
         await expect(usuario).toHaveValue('standard'); 
         
  });

    test('Login com sucesso', async ({ page }) => {
     await page.getByPlaceholder("Username").fill("standard_user");
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/preenchimentoCorretoTotal.png"});
  });

  test('Login erro no usuário', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user1');
     await page.screenshot({path: "Evidencias/usuarioErro1.png"});
     await page.getByPlaceholder("Username_us").fill('');
     await page.screenshot({path: "Evidencias/usuarioErro2.png"});
     await page.getByPlaceholder("Username").fill('standard_use');
     await page.screenshot({path: "Evidencias/usuarioErro3.png"});
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     
     
  });

  test('Login erro na senha', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('secret_sauce1');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro.png"}); 
  });

  test('Username locked_out_user', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('locked_out_user');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/locked.png"});
  });

  test('Username problem_user', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('problem_user');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/Problem.png"});
  });

  test('Username performance_glitch_user', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('performance_glitch_user');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/Performance.png"});
  });

  test('Username error_user', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('error_user');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/ErrorUser.png"});
  });

   test('Username visual_user', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('visual_user');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/visualUser.png"});
  });

   test('Logout', async ({ page }) => {
     await page.getByPlaceholder("Username").fill("standard_user");
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.locator("#react-burger-menu-btn").click();
     await page.screenshot({path: "Evidencias/logoutBurger.png"});
     await page.locator("#logout_sidebar_link").click();
     await page.screenshot({path: "Evidencias/logout.png"});
  });
});











