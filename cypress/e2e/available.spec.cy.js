describe("Тестирование работоспособности приложения", () => {
  cy.visit("http://localhost:3000/");
  cy.contains("МБОУ АЛГОСОШ");
  cy.wait(1000);
});
