import { test, expect } from '@playwright/test';


  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test.describe.parallel('login',() => {

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

   test('Login erro no usuário clean', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user1');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErroClean1.png"});
     await page.getByPlaceholder("Username").clear();
     await page.getByPlaceholder('Password').clear();
      await page.screenshot({path: "Evidencias/usuarioErroClean2.png"});
     await page.getByPlaceholder("Username").fill('standard_user12');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErroClean3.png"}); 
  });

  test('Login erro no usuário reload', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user1');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErroReload1.png"});
     await page.reload()
     await page.screenshot({path: "Evidencias/usuarioErroReload2.png"});
     await page.getByPlaceholder("Username").fill('standard_user12');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErroReload3.png"}); 
    
  });

  test('Login erro no usuário 2', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_users');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErro2.png"});
  });

  test('Login erro no usuário 3', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_us');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErro3.png"});
  });

  test('Login erro no usuário 4', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErro4.png"});
  });

  test('Login erro na senha 1', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('secret_sauce1');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro1.png"});
  });

  test('Login erro na senha 2', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('secret_saucer');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro2.png"});
    
  });

  test('Login erro na senha 3', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('secret');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro3.png"});
  });

  test('Login erro na senha 4', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro4.png"});
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

test.describe('login sem paralelo',() => {

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

   test('Login erro no usuário clean', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user1');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErroClean1.png"});
     await page.getByPlaceholder("Username").clear();
     await page.getByPlaceholder('Password').clear();
      await page.screenshot({path: "Evidencias/usuarioErroClean2.png"});
     await page.getByPlaceholder("Username").fill('standard_user12');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErroClean3.png"}); 
  });

  test('Login erro no usuário reload', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user1');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErroReload1.png"});
     await page.reload()
     await page.screenshot({path: "Evidencias/usuarioErroReload2.png"});
     await page.getByPlaceholder("Username").fill('standard_user12');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErroReload3.png"}); 
    
  });

  test('Login erro no usuário 2', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_users');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErro2.png"});
  });

  test('Login erro no usuário 3', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_us');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErro3.png"});
  });

  test('Login erro no usuário 4', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('');
     await page.getByPlaceholder('Password').fill('secret_sauce');
     await page.getByRole("button").click(); 
     await page.screenshot({path: "Evidencias/usuarioErro4.png"});
  });

  test('Login erro na senha 1', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('secret_sauce1');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro1.png"});
  });

  test('Login erro na senha 2', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('secret_saucer');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro2.png"});
    
  });

  test('Login erro na senha 3', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('secret');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro3.png"});
  });

  test('Login erro na senha 4', async ({ page }) => {
     await page.getByPlaceholder("Username").fill('standard_user');
     await page.getByPlaceholder('Password').fill('');
     await page.getByRole("button").click();
     await page.screenshot({path: "Evidencias/senhaErro4.png"});
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











