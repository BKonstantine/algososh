describe("Тестирование работоспособности приложения", () => {
  it("Страница алгоритма разворота строки доступна", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.visit("/recursion");
    cy.contains("Строка");
    cy.wait(1000);
  });

  it("Страница алгоритма Фибоначчи доступна", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.visit("/fibonacci");
    cy.contains("Фибоначчи");
    cy.wait(1000);
  });

  it("Страница алгоритма сортировок доступна", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.visit("/sorting");
    cy.contains("Сортировка");
    cy.wait(1000);
  });

  it("Страница структуры данных 'Стек' доступна", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.visit("/stack");
    cy.contains("Стек");
    cy.wait(1000);
  });

  it("Страница структуры данных 'Очередь' доступна", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.visit("/queue");
    cy.contains("Очередь");
    cy.wait(1000);
  });

  it("Страница структуры данных 'Связный список' доступна", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.visit("/list");
    cy.contains("Связный список");
    cy.wait(1000);
    cy.visit("/");
  });
});
