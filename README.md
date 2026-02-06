Esse projeto foi utilizado a ferramenta playwright.

Como executar os testes:
 -> Pode ser pelo próprio VScode com o incone de "Play" no lado de cada função ou atráves da extesão testing
 -> cmandos no cmd tais como:

   - npx playwright test
   - npx playwright show-report
   - npx playwright test --ui
   - npx playwright test --project=chromium ou npx playwright test --project=firefox
  
Estrutura do projeto:

1 - códigos dos testes automátizados:
=> test/FrontEnd.spec.ts 
=> test/BackEnd.spec.ts

2 - Evidências:
=> Evidencias/{nome}.png
=> test-results/tests-FronEnd-{nome}


3 - playwright.config.ts

Estratégia adotada:

=> FronEnd teste funcional do login do site https://www.saucedemo.com/
=> BackEnd teste de API do site https://brasilapi.com.br/api
