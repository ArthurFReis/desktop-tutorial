import { test, expect, Page } from "@playwright/test";
import { pageResponsivoLogin } from "./login";
import { NavegationPage } from "./navegationPage";


test.beforeEach(async ({ page }) => {
  let navigationPage = new NavegationPage(page);
  await navigationPage.saucedemo();
  expect(page).toHaveURL("https://www.saucedemo.com/");
});

test.describe.parallel("Login", () => {
  test("Teste de preenchimento correto", async ({ page }) => {
    let navigationPage = new NavegationPage(page);
    await pageResponsivoLogin(page);
    await navigationPage.userename.fill("standard_user");
    await navigationPage.password.fill("secret_sauce");
    if (
      (await navigationPage.loginButton.isVisible()) &&
      (await navigationPage.loginButton.isEnabled())
    ) {
      await navigationPage.loginButton.click();
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
      await page.screenshot({
        path: "Evidencias/login/Correto/preenchimentoCorretoTotal.png",
      });
    } else {
      console.log("O botão de login não está visível! \n");
    }

    await pageResponsivoLogin(page);
  });

  test("Teste usuarios testando o método limpar campos", async ({ page }) => {
    let navigationPage = new NavegationPage(page);
    let errors = {
      users: ["standard_user1", "stendard", ""],
      senha: "secret_sauce",
    };
    for (const user in errors.users) {
      await page.fill('input[placeholder="Username"]', errors.users[user]);
      await page.fill('input[placeholder="Password"]', errors.senha);
      await page.click("#login-button");
      let erroMessage = await page.locator('h3[data-test="error"]').innerText();
      console.log("Erros do método limpar campos: ", erroMessage);
      await page.screenshot({
        path: `Evidencias/login/TestandoUseuarios/Clean/usuarioErroClean-${errors.users[user]}.png`,
      });
      await navigationPage.useario.clear();
      await navigationPage.senha.clear();
      await page.fill('input[placeholder="Username"]', errors.users[user]);
      await page.fill('input[placeholder="Password"]', errors.senha);
      await page.click("#login-button");
      await navigationPage.useario.clear();
      await navigationPage.senha.clear();
    }
  });

  test("Teste usuarios testando o método refresh da página", async ({
    page,
  }) => {
    let errors = {
      users: ["standard_user1", "stendard", ""],
      senha: "secret_sauce",
    };
    for (const user in errors.users) {
      await page.fill('input[placeholder="Username"]', errors.users[user]);
      await page.fill('input[placeholder="Password"]', errors.senha);
      await page.click("#login-button");
      let erroMessage = await page.locator('h3[data-test="error"]').innerText();
      console.log("Erros do método refresh da página: " + erroMessage);
      await page.screenshot({
        path: `Evidencias/login/TestandoUseuarios/Refresh/usuarioErroRefresh-${errors.users[user]}.png`,
      });
      await page.reload();
      await page.fill('input[placeholder="Username"]', errors.users[user]);
      await page.fill('input[placeholder="Password"]', errors.senha);
      await page.click("#login-button");
      await page.reload();
    }

    console.log(
      "======================================================================================================================== \n",
    );
    console.log("Começa os erros do password! \n");
  });

  test("Teste  password testando o método limpar campos", async ({ page }) => {
    let errors = {
      password: ["secret_sauce1", "", "secret"],
      user: "standard_user",
    };
    for (const user in errors.password) {
      await page.fill('input[placeholder="Username"]', errors.user);
      await page.fill('input[placeholder="Password"]', errors.password[user]);
      await page.click("#login-button");
      let erroMessage = await page.locator('h3[data-test="error"]').innerText();
      console.log("Erros do método limpar campos: ", erroMessage);
      await page.screenshot({
        path: `Evidencias/login/TestandoPassword/Clean/usuarioErroClean-${errors.password[user]}.png`,
      });
      await page.getByPlaceholder("Username").clear();
      await page.getByPlaceholder("Password").clear();
      await page.fill('input[placeholder="Username"]', errors.user);
      await page.fill('input[placeholder="Password"]', errors.password[user]);
      await page.click("#login-button");
      await page.getByPlaceholder("Username").clear();
      await page.getByPlaceholder("Password").clear();
    }
  });

  test("Teste password testando o método refresh da página", async ({
    page,
  }) => {
    let errors = {
      password: ["secret_sauce1", "", "secret"],
      user: "standard_user",
    };
    for (const user in errors.password) {
      await page.fill('input[placeholder="Username"]', errors.user);
      await page.fill('input[placeholder="Password"]', errors.password[user]);
      await page.click("#login-button");
      let erroMessage = await page.locator('h3[data-test="error"]').innerText();
      console.log("Erros do método refresh da página: " + erroMessage);
      await page.screenshot({
        path: `Evidencias/login/TestandoPassword/Refresh/usuarioErroRefresh-${errors.password[user]}.png`,
      });
      await page.reload();
      await page.fill('input[placeholder="Username"]', errors.user);
      await page.fill('input[placeholder="Password"]', errors.password[user]);
      await page.click("#login-button");
      await page.reload();
    }
    console.log(
      "======================================================================================================================== \n",
    );
    console.log("Começa os tipos de login! \n");
  });

  test("Login tipos de usuário", async ({ page }) => {
    let tiposUsuarios = [1, 2, 3, 4, 5];
    let navigationPage = new NavegationPage(page);

    for (let i = 0; i < tiposUsuarios.length; i++) {
      switch (tiposUsuarios[i]) {
        case 1:
          await page.fill('input[placeholder="Username"]', "locked_out_user");
          await page.fill('input[placeholder="Password"]', "secret_sauce");
          await page.click("#login-button");
          let erroMessage = await page
            .locator('h3[data-test="error"]')
            .innerText();
          console.log("Erro do usuário locked_out_user: " + erroMessage);
          await page.screenshot({
            path: "Evidencias/login/TiposDeUsuario/usuarioLockedOut.png",
          });
          console.log("Tipo usuário 1 testado! \n");
          break;
        case 2:
          await page.fill('input[placeholder="Username"]', "problem_user");
          await page.fill('input[placeholder="Password"]', "secret_sauce");
          await page.click("#login-button");
          let erroMessage1 = await page.locator('h3[data-test="error"]').innerText();
          console.log('Erro do usuário problem_user: ' + erroMessage1);
          await page.screenshot({
            path: "Evidencias/login/TiposDeUsuario/usuarioProblem.png",
          });
          console.log("Tipo usuário 2 testado! \n");
          await navigationPage.saucedemo();
          break;
        case 3:
          await page.fill(
            'input[placeholder="Username"]',
            "performance_glitch_user",
          );
          await page.fill('input[placeholder="Password"]', "secret_sauce");
          await page.click("#login-button");
          let erroMessage2 = await page.locator('h3[data-test="error"]').innerText();
          console.log('Erro do usuário performance_glitch_user: ' + erroMessage2);
          await page.screenshot({
            path: "Evidencias/login/TiposDeUsuario/usuarioPerformanceGlitch.png",
          });
          console.log("Tipo usuário 3 testado! \n");
          await navigationPage.saucedemo();
          break;
        case 4:
          await page.fill('input[placeholder="Username"]', "error_user");
          await page.fill('input[placeholder="Password"]', "secret_sauce");
          await page.click("#login-button");
          let erroMessage3 = await page.locator('h3[data-test="error"]').innerText();
          console.log('Erro do usuário error_user: ' + erroMessage3);
          await page.screenshot({
            path: "Evidencias/login/TiposDeUsuario/usuarioError.png",
          });
          console.log("Tipo usuário 4 testado! \n");
          await navigationPage.saucedemo();
          break;
        case 5:
          await page.fill('input[placeholder="Username"]', "visual_user");
          await page.fill('input[placeholder="Password"]', "secret_sauce");
          await page.click("#login-button");
          let erroMessage4 = await page.locator('h3[data-test="error"]').innerText();
          console.log('Erro do usuário visual_user: ' + erroMessage4);
          await page.screenshot({
            path: "Evidencias/login/TiposDeUsuario/usuarioVisual.png",
          });
          console.log("Tipo usuário 5 testado! \n");
          await navigationPage.saucedemo();
          break;

        default:
          console.log("O tipo de usuário não existe! \n");
      }
    }
  });

  test("Logout", async ({ page }) => {
    await page.fill('input[placeholder="Username"]', "standard_user");
    await page.fill('input[placeholder="Password"]', "secret_sauce");
    await page.click("#login-button");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await page.click("#react-burger-menu-btn");
    await page.screenshot({path: "Evidencias/login/loginout/logoutBurger.png"});
    await page.click("#logout_sidebar_link");
    await page.screenshot({ path: "Evidencias/login/loginout/logout.png" });
  });

  test("Teste no inventory pesquisar", async ({ page }) => {
    let navigationPage = new NavegationPage(page);
    await navigationPage.userename.fill("standard_user");
      await navigationPage.password.fill("secret_sauce");
      if (
        (await navigationPage.loginButton.isVisible()) &&
        (await navigationPage.loginButton.isEnabled())
      ) {
        await navigationPage.loginButton.click();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        
      }
       let tiposPesquisa = [1, 2, 3, 4];

       for(let i = 0; i < tiposPesquisa.length; i++){

        switch (tiposPesquisa[i]) {
          case 1:
            await page.locator('select').selectOption('az');
            await page.screenshot({path: `Evidencias/login/Inventory/tipoPesquisaAZ-${tiposPesquisa[i]}.png`});
            break;
          case 2:
             await page.locator('select').selectOption('za');
             await page.screenshot({ path: `Evidencias/login/Inventory/tipoPesquisaZA-${tiposPesquisa[i]}.png` });
             break;
          case 3:
             await page.locator('select').selectOption('lohi');
             await page.screenshot({ path: `Evidencias/login/Inventory/tipoPesquisaPriceCrescente-${tiposPesquisa[i]}.png` });
             break;
          case 4:
            await page.locator('select').selectOption('hilo');
             await page.screenshot({ path: `Evidencias/login/Inventory/tipoPesquisaPriceDecrescente-${tiposPesquisa[i]}.png`  });
             break;
             default:
              console.log("Tipo de pesquisa inválida! \n");
        }
        
      }
      console.log("testado todos os tipos de pesquisa com sucesso! \n");  
  });

  test("Teste no inventory adicionar produto", async ({ page }) => {
    let navigationPage = new NavegationPage(page);
    await navigationPage.userename.fill("standard_user");
      await navigationPage.password.fill("secret_sauce");
      if (
        (await navigationPage.loginButton.isVisible()) &&
        (await navigationPage.loginButton.isEnabled())
      ) {
        await navigationPage.loginButton.click();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        
      }
       let botaoAdicionar = [1, 2, 3, 4,5,6];
       let produto = [];
       
       for(let i = 0; i < botaoAdicionar.length; i++){

        switch (botaoAdicionar[i]) {
          case 1:
            await page.locator('#add-to-cart-sauce-labs-backpack').click();
            if ((await page.locator('#remove-sauce-labs-backpack').isVisible()) && (await page.locator('#remove-sauce-labs-backpack').isEnabled())) {
            produto.push('Sauce Labs Backpack');
            
            await page.screenshot({path: `Evidencias/login/Inventory/Adicionar/botãoBackpack-${botaoAdicionar[i]}.png`});
            }
            break;
          case 2:
             await page.locator('#add-to-cart-sauce-labs-bike-light').click();
              if ((await page.locator('#remove-sauce-labs-bike-light').isVisible()) && (await page.locator('#remove-sauce-labs-bike-light').isEnabled()))  {
              produto.push('Sauce Labs Bike Light');
              await page.screenshot({ path: `Evidencias/login/Inventory/Adicionar/botãoBikeLight-${botaoAdicionar[i]}.png` });
              }
             break;
          case 3:
              await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
              if ((await page.locator('#remove-sauce-labs-bolt-t-shirt').isVisible()) && (await page.locator('#remove-sauce-labs-bolt-t-shirt').isEnabled())) {
              produto.push('Sauce Labs Bolt T-Shirt');
              await page.screenshot({ path: `Evidencias/login/Inventory/Adicionar/botãoBoltTShirt-${botaoAdicionar[i]}.png` });
             }
             break;
          case 4:
            await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
            if((await page.locator('#remove-sauce-labs-fleece-jacket').isVisible()) && (await page.locator('#remove-sauce-labs-fleece-jacket').isEnabled())) {
              produto.push('Sauce Labs Fleece Jacket');
             await page.screenshot({ path: `Evidencias/login/Inventory/Adicionar/botãoFleeceJacket-${botaoAdicionar[i]}.png`  });
            }
             break;
             case 5:
             await page.locator('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
             if ((await page.locator('button[data-test="remove-test.allthethings()-t-shirt-(red)"]').isVisible()) && (await page.locator('button[data-test="remove-test.allthethings()-t-shirt-(red)"]').isEnabled())) {
              produto.push('Test.allthethings() T-Shirt (Red)');
             await page.screenshot({ path: `Evidencias/login/Inventory/Adicionar/botaoTShirtRed-${botaoAdicionar[i]}.png` });
             }
             break;
             case 6:
              await page.locator('#add-to-cart-sauce-labs-onesie').click();
              if ((await page.locator('#remove-sauce-labs-onesie').isVisible()) && (await page.locator('#remove-sauce-labs-onesie').isEnabled())) { 
              produto.push('Sauce Labs Onesie');
              await page.screenshot({ path: `Evidencias/login/Inventory/Adicionar/botãoOnesie-${botaoAdicionar[i]}.png` });
              }
              break;  
             default:
              console.log("Não existe mais produtos para adicionar! \n");
        }
        
      }
      await page.hover('.shopping_cart_link');
      if ((await page.locator('.shopping_cart_badge').isVisible()) && (await page.locator('.shopping_cart_badge').isEnabled())) {
        console.log("o carrirnho de compras está visível e habilitado! \n");

        let cart =  await page.locator('.shopping_cart_badge').textContent();
        expect(cart).toBe(String(produto.length));
        console.log('\n O valor do cart é:', String(produto.length));
        console.log("\n")
        await page.screenshot({path: "Evidencias/inventory/Carrinho/ProdutoCartAntesRefresh.png"});
        await page.reload();

        if (await page.locator('.shopping_cart_badge').innerText() === cart) {
          
          console.log("Todos os produtos foram adicionados com sucesso! \n");
          await page.screenshot({path: "Evidencias/inventory/Carrinho/ProdutoCartDepoisRefresh.png"});
        }
        else {
          console.log("Nem todos os produtos foram adicionados! \n");
        }
      }
      else {
        console.log("O carrinho de compras não está visível ou habilitado! \n");
      }

      await page.click('.shopping_cart_link');
      await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
      await page.screenshot({path: "Evidencias/inventory/Carrinho/ProdutoCartPage.png"}); 

      await page.click('button[data-test="checkout"]');
      await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
      await page.screenshot({path: "Evidencias/inventory/Carrinho/checkout-step-one.html.png"});
     
  });

});