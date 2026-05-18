import { Page, expect } from "@playwright/test";

export async function pageResponsivoLogin(page: Page) {
  let tamanhos = {
    nomes: ["iPhone_SE", "iPhone_XR", "iPhone_12_Pro", "iPhone_14_Pro_Max"],
    width: [375, 414, 390, 430],
    height: [667, 896, 844, 932],
  };
  for (const tamanho in tamanhos.width) {
    if (page.url() === "https://www.saucedemo.com/") {
      await page.setViewportSize({
        width: tamanhos.width[tamanho],
        height: tamanhos.height[tamanho],
      });
      await page.screenshot({
        path: `Evidencias/login/Responsivo/Saucedemo/mobile-${tamanhos.nomes[tamanho]}.png`,
      });
    } else {
      await page.setViewportSize({
        width: tamanhos.width[tamanho],
        height: tamanhos.height[tamanho],
      });
      await page.screenshot({
        path: `Evidencias/login/Responsivo/Inventory/mobile-${tamanhos.nomes[tamanho]}.png`,
      });
    }
    console.log("É responsivo! \n");
    console.log(
      "======================================================================================================================== \n",
    );
  }
}
