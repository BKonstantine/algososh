describe("Тестирование работоспособности приложения", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
  });

  it("Страница алгоритма разворота строки доступна", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.visit("http://localhost:3000/recursion");
    cy.contains("Строка");
    cy.wait(1000);
  });

  it("Страница алгоритма Фибоначчи доступна", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.visit("http://localhost:3000/fibonacci");
    cy.contains("Фибоначчи");
    cy.wait(1000);
  });

  it("Страница алгоритма сортировок доступна", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.visit("http://localhost:3000/sorting");
    cy.contains("Сортировка");
    cy.wait(1000);
  });

  it("Страница структуры данных 'Стек' доступна", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.visit("http://localhost:3000/stack");
    cy.contains("Стек");
    cy.wait(1000);
  });

  it("Страница структуры данных 'Очередь' доступна", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.visit("http://localhost:3000/queue");
    cy.contains("Очередь");
    cy.wait(1000);
  });

  it("Страница структуры данных 'Связный список' доступна", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.visit("http://localhost:3000/list");
    cy.contains("Связный список");
    cy.wait(1000);
    cy.visit("http://localhost:3000");
  });
});
