import { test, expect, Page } from '@playwright/test';
import { pageResponsivoLogin } from './login';
import { NavegationPage } from './navegationPage'

test.beforeEach(async ({ page }) => {
  let navigationPage = new NavegationPage(page);
  await navigationPage.saucedemo();
  expect(page).toHaveURL('https://www.saucedemo.com/');
});

test.describe.parallel('Login', () => {

  
  
  test('Teste de preenchimento correto', async ({ page }) => {
    let navigationPage = new NavegationPage(page);
     await pageResponsivoLogin(page);
     await navigationPage.userename.fill('standard_user');
     await navigationPage.password.fill('secret_sauce');
     if ((await navigationPage.loginButton.isVisible()) && (await navigationPage.loginButton.isEnabled())) {
      await navigationPage.loginButton.click();
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 
      await page.screenshot({path: "Evidencias/login/Correto/preenchimentoCorretoTotal.png"});
     } 
     else {
      console.log("O botão de login não está visível! \n");
     }
     
     await pageResponsivoLogin(page);
  });

    test('Teste usuarios testando o método limpar campos', async ({ page }) => {
      let navigationPage = new NavegationPage(page);
      let errors = {"users": ["standard_user1", "stendard", ""], "senha": "secret_sauce"};
      for(const user in errors.users){
        await page.fill('input[placeholder="Username"]', errors.users[user]);
        await page.fill('input[placeholder="Password"]', errors.senha);
        await page.click('#login-button');
        let erroMessage = await page.locator('h3[data-test="error"]').innerText();
        console.log('Erros do método limpar campos: ', erroMessage);
        await page.screenshot({path: `Evidencias/login/TestandoUseuarios/Clean/usuarioErroClean-${errors.users[user]}.png`});
        await navigationPage.useario.clear();
        await navigationPage.senha.clear();
        await page.fill('input[placeholder="Username"]', errors.users[user]);
        await page.fill('input[placeholder="Password"]', errors.senha);
        await page.click('#login-button');
        await navigationPage.useario.clear();
        await navigationPage.senha.clear();
      }
  });

     test('Teste usuarios testando o método refresh da página', async ({ page }) => {
      let errors = {"users": ["standard_user1", "stendard", ""], "senha": "secret_sauce"};
      for(const user in errors.users){
        await page.fill('input[placeholder="Username"]', errors.users[user]);
        await page.fill('input[placeholder="Password"]', errors.senha);
        await page.click('#login-button');
        let erroMessage = await page.locator('h3[data-test="error"]').innerText();
        console.log('Erros do método refresh da página: ' + erroMessage);
        await page.screenshot({path: `Evidencias/login/TestandoUseuarios/Refresh/usuarioErroRefresh-${errors.users[user]}.png`});
        await page.reload()
        await page.fill('input[placeholder="Username"]', errors.users[user]);
        await page.fill('input[placeholder="Password"]', errors.senha);
        await page.click('#login-button');
        await page.reload()
      }

      console.log("======================================================================================================================== \n")
      console.log("Começa os erros do password! \n");
  });

  

   test('Teste  password testando o método limpar campos', async ({ page }) => {
      let errors = {"password": ["secret_sauce1", "", "secret"], "user": "standard_user"};
      for(const user in errors.password){
        await page.fill('input[placeholder="Username"]', errors.user);
        await page.fill('input[placeholder="Password"]', errors.password[user]);
        await page.click('#login-button');
        let erroMessage = await page.locator('h3[data-test="error"]').innerText();
        console.log('Erros do método limpar campos: ', erroMessage);
        await page.screenshot({path: `Evidencias/login/TestandoPassword/Clean/usuarioErroClean-${errors.password[user]}.png`});
        await page.getByPlaceholder('Username').clear();
        await page.getByPlaceholder('Password').clear();
        await page.fill('input[placeholder="Username"]', errors.user);
        await page.fill('input[placeholder="Password"]', errors.password[user]);
        await page.click('#login-button');
        await page.getByPlaceholder('Username').clear();
        await page.getByPlaceholder('Password').clear();
      }
  });

     test('Teste password testando o método refresh da página', async ({ page }) => {
      let errors = {"password": ["secret_sauce1", "", "secret"], "user": "standard_user"};
      for(const user in errors.password){
        await page.fill('input[placeholder="Username"]', errors.user);
        await page.fill('input[placeholder="Password"]', errors.password[user]);
        await page.click('#login-button');
        let erroMessage = await page.locator('h3[data-test="error"]').innerText();
        console.log('Erros do método refresh da página: ' + erroMessage);
        await page.screenshot({path: `Evidencias/login/TestandoPassword/Refresh/usuarioErroRefresh-${errors.password[user]}.png`});
        await page.reload()
        await page.fill('input[placeholder="Username"]', errors.user);
        await page.fill('input[placeholder="Password"]', errors.password[user]);
        await page.click('#login-button');
        await page.reload()
      }
      console.log("======================================================================================================================== \n")
      console.log("Começa os tipos de login! \n");
  });

    test('Login tipos de usuário', async ({ page }) => {
    
     let tiposUsuarios = [1, 2, 3, 4, 5];
     let navigationPage = new NavegationPage(page);
  
     for(let i = 0; i < tiposUsuarios.length; i++){

      switch (tiposUsuarios[i]) {
         case 1:
            await page.fill('input[placeholder="Username"]', 'locked_out_user');
            await page.fill('input[placeholder="Password"]', 'secret_sauce');
            await page.click('#login-button');
            let erroMessage = await page.locator('h3[data-test="error"]').innerText();
            console.log('Erro do usuário locked_out_user: ' + erroMessage);
            await page.screenshot({path: "Evidencias/login/TiposDeUsuario/usuarioLockedOut.png"});
            console.log("Tipo usuário 1 testado! \n");
            break;
         case 2:
            await page.fill('input[placeholder="Username"]', 'problem_user');
            await page.fill('input[placeholder="Password"]', 'secret_sauce');
            await page.click('#login-button');
            //let erroMessage = await page.locator('h3[data-test="error"]').innerText();
            //console.log('Erro do usuário problem_user: ' + erroMessage);
            await page.screenshot({path: "Evidencias/login/TiposDeUsuario/usuarioProblem.png"});
            console.log("Tipo usuário 2 testado! \n");
            await navigationPage.saucedemo();
             break;
         case 3:
            await page.fill('input[placeholder="Username"]', 'performance_glitch_user');
            await page.fill('input[placeholder="Password"]', 'secret_sauce');
            await page.click('#login-button');
            //let erroMessage = await page.locator('h3[data-test="error"]').innerText();
            //console.log('Erro do usuário performance_glitch_user: ' + erroMessage);
            await page.screenshot({path: "Evidencias/login/TiposDeUsuario/usuarioPerformanceGlitch.png"});
            console.log("Tipo usuário 3 testado! \n");
            await navigationPage.saucedemo();
             break;
         case 4:
            await page.fill('input[placeholder="Username"]', 'error_user');
            await page.fill('input[placeholder="Password"]', 'secret_sauce');
            await page.click('#login-button');
            //let erroMessage = await page.locator('h3[data-test="error"]').innerText();
           // console.log('Erro do usuário error_user: ' + erroMessage);
            await page.screenshot({path: "Evidencias/login/TiposDeUsuario/usuarioError.png"});
            console.log("Tipo usuário 4 testado! \n");
            await navigationPage.saucedemo();
             break;
         case 5:
            await page.fill('input[placeholder="Username"]', 'visual_user');
            await page.fill('input[placeholder="Password"]', 'secret_sauce');
            await page.click('#login-button');
            //let erroMessage = await page.locator('h3[data-test="error"]').innerText();
           // console.log('Erro do usuário visual_user: ' + erroMessage);
            await page.screenshot({path: "Evidencias/login/TiposDeUsuario/usuarioVisual.png"}); 
            console.log("Tipo usuário 5 testado! \n");
            await navigationPage.saucedemo();  
            break;

            default:
                    console.log('O tipo de usuário não existe! \n');
      }

    } 
  });

     test('Logout', async ({ page }) => {
     await page.fill('input[placeholder="Username"]', 'standard_user');
     await page.fill('input[placeholder="Password"]', 'secret_sauce');
     await page.click('#login-button'); 
     await page.click('#react-burger-menu-btn');
     await page.screenshot({path: "Evidencias/login/loginout/logoutBurger.png"});
     await page.click('#logout_sidebar_link');
     await page.screenshot({path: "Evidencias/login/loginout/logout.png"});
  });

});