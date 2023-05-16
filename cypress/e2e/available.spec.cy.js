describe("Тестирование работоспособности приложения", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
  });
  
  it("Главная страница доступна", () => {
    cy.visit("http://localhost:3000");
    cy.contains("МБОУ АЛГОСОШ");
    cy.wait(1000);
  });
});
