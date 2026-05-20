import { test, expect } from "@playwright/test";

test.describe.parallel("API com paralelo", () => {
  test("Login correto metodo errado", async ({ request, page }) => {;
    const response = await request.post(`https://www.saucedemo.com/`, {
      form: {
        Username: "standard_user",
        Password: "secret_sauce",
      },
    });
    expect(response.status()).toBe(200);
    console.log("Login correto, status: ", response.status());
  });

   test("Login correto", async ({ request, page }) => {;
    const response = await request.get(`https://www.saucedemo.com/`, {
      form: {
        Username: "standard_user",
        Password: "secret_sauce",
      },
    });
    expect(response.status()).toBe(200);
    console.log("Login correto, status: ", response.status());
  });

  test("Login Erro de status", async ({ request, page }) => {;
    const response = await request.get(`https://www.saucedemo.com/`, {
      form: {
        Username: "standard_user",
        Password: "secret_sauce",
      },
    });
    expect(response.status()).toBe(400);
    console.log("Login erro de status, status: ", response.status());
  });

  test("Login erro de usuário", async ({ request, page }) => {;
    const response = await request.get(`https://www.saucedemo.com/`, {
      form: {
        Username: "standard_user1",
        Password: "secret_sauce",
      },
    });
    expect(response.status()).toBe(403);
    console.log("Login erro de usuário, status: ", response.status());
  });

  test("Login erro de password", async ({ request, page }) => {;
    const response = await request.get(`https://www.saucedemo.com/`, {
      form: {
        Username: "standard_user",
        Password: "secret_sauce1",
      },
    });
    expect(response.status()).toBe(403);
    console.log("Login erro de password, status: ", response.status());
  });

 test("Inventory teste", async ({ request, page }) => {
    const site = "https://www.saucedemo.com";
    const response = await request.get(`${site}/inventory.html`);
    expect(response.status()).toBe(200);
  });

});
