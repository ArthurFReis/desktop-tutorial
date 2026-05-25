import { Page, expect } from "@playwright/test";

export async function pageResponsivoLogin(page: Page) {
  let tamanhos = {
    nomes: ["iPhone_SE", "iPhone_XR", "iPhone_12_Pro", "iPhone_14_Pro_Max"],
    width: [375, 414, 390, 430],
    height: [667, 896, 844, 932],
  };
  for (let tamanho in tamanhos.width) {
    if (page.url() === "https://www.saucedemo.com/") {
      await page.setViewportSize({
        width: tamanhos.width[tamanho],
        height: tamanhos.height[tamanho],
      });
      await page.screenshot({
        path: `Evidencias/login/Responsivo/Saucedemo/mobile-${tamanhos.nomes[tamanho]}.png`,
      });
    } else if (page.url() === "https://www.saucedemo.com/inventory.html") {
      await page.setViewportSize({
        width: tamanhos.width[tamanho],
        height: tamanhos.height[tamanho],
      });
      await page.screenshot({
        path: `Evidencias/login/Responsivo/Inventory/mobile-${tamanhos.nomes[tamanho]}.png`,
      });
    }
    else if (page.url() === "https://www.saucedemo.com/cart.html") {
      await page.setViewportSize({
        width: tamanhos.width[tamanho],
        height: tamanhos.height[tamanho],
      });
      await page.screenshot({
        path: `Evidencias/login/Responsivo/Cart/mobile-${tamanhos.nomes[tamanho]}.png`,
      });
    }
    else if (page.url() === "https://www.saucedemo.com/checkout-step-one.html") {
      await page.setViewportSize({
        width: tamanhos.width[tamanho],
        height: tamanhos.height[tamanho],
      });
      await page.screenshot({
        path: `Evidencias/login/Responsivo/Checkout/mobile-${tamanhos.nomes[tamanho]}.png`,
      });
    }
    else{
      console.log("URL não reconhecida para teste de responsividade.");
    }
    console.log("É responsivo! \n");
    console.log(
      "======================================================================================================================== \n",
    );
  }
}
