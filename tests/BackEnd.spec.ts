import { test, expect } from '@playwright/test';

test.describe.parallel("API", () => {
     
    const site = 'https://brasilapi.com.br/api'


    test("Bancos em geral", async({request, page}) => {
        const response = await request.get(`${site}/banks/v1`);
        expect(response.status()).toBe(200);
        
    });

    test("Bancos em geral a validação errada", async({request , page}) => {
        const response = await request.get(`${site}/banks/v1`);
        expect(response.status()).toBe(400);
    });

        test("banco com o código = 1 e imprimir o valor do status", async({request, page}) => {
        const response = await request.get(`${site}/banks/v1/1`);
        console.log(response.status());
        //expect(response.status()).toBe(200);
    });

    test("Cep = 89010025 e mostrar o resultado do corpo do JSON", async({request, page}) => {
        const response = await request.get(`${site}/cep/v1/89010025`);
        expect(response.status()).toBe(200);

        const responsebody = JSON.parse(await response.text());
        const resposta = console.log(responsebody);
    
    });
});
 
