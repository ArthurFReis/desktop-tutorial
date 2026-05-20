import { test, expect } from "@playwright/test";

test.describe.parallel("API com paralelo", () => {
  test("tipos de teste de backend", async ({ request, page }) => {
    let tiposTest = [1, 2, 3];
    const site = "https://brasilapi.com.br/api";

    for (let i = 0; i < tiposTest.length; i++) {
      switch (tiposTest[i]) {
        case 1:
          const response = await request.get(`${site}/banks/v1`);
          expect(response.status()).toBe(200);
          break;

        case 2:
          const response3 = await request.get(`${site}/banks/v1/1`);
          console.log(response3.status());
          expect(response3.status()).toBe(200);
          break;
        case 3:
          const response4 = await request.get(`${site}/cep/v1/89010025`);
          expect(response4.status()).toBe(200);
          const responsebody = JSON.parse(await response4.text());
          console.log(responsebody);
          break;

        default:
          console.log("Tipo de teste inválido!");
          break;
      }
    }
  });

  test("Bancos em geral a validação errada", async ({ request, page }) => {
    const site = "https://brasilapi.com.br/api";
    const response = await request.get(`${site}/banks/v1`);
    expect(response.status()).toBe(400);
  });

  test("Teste de dados diferentes", async ({ request, page }) => {
    const site = "https://brasilapi.com.br/api";
    let dados = { "cep": "89010025", "state": "SC", "city": "Blumenau", "neighborhood": "Centro", "street": "Rua Doutor Luiz de Freitas Melro", "service": "open-cep" };
    for(let dado in dados){
      const response = await request.get(`${site}/cep/v1/${dados[dado]}`);
      console.log("O status de cada requisição é: " + response.status());
    }
    
  });
});
