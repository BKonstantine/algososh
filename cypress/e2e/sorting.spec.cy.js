describe("Проверка визуализации алгоритмов сортировки", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000/sorting");
  });

  it("Кнопки активны, радио-кнопка 'Выбор' активна", () => {
    cy.get("[value='selectionSort']").as("selectionSortButton");
    cy.get("[value='bubbleSort']").as("bubbleSortButton");
    cy.get("[data='ascending-button']").as("ascendingButton");
    cy.get("[data='descending-button']").as("descendingButton");
    cy.get("[data='new-array-button']").as("newArrayButton");

    cy.get("@selectionSortButton").should("be.checked");
    cy.get("@bubbleSortButton").should("not.be.checked");
    cy.get("@ascendingButton").should("not.be.disabled");
    cy.get("@descendingButton").should("not.be.disabled");
    cy.get("@newArrayButton").should("not.be.disabled");

    cy.wait(1000);
  });

  it("Визуализация алгоритма сортировки выбором по возрастанию работает корректно", () => {
    cy.get("[value='selectionSort']").as("selectionSortButton");
    cy.get("[value='bubbleSort']").as("bubbleSortButton");
    cy.get("[data='ascending-button']").as("ascendingButton");
    cy.get("[data='descending-button']").as("descendingButton");
    cy.get("[data='new-array-button']").as("newArrayButton");

    cy.get("@ascendingButton").click();
    cy.get("@ascendingButton")
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get("@selectionSortButton").should("be.disabled");
    cy.get("@bubbleSortButton").should("be.disabled");
    cy.get("@descendingButton").should("be.disabled");
    cy.get("@newArrayButton").should("be.disabled");

    cy.wait(1000);
  });

  it("Визуализация алгоритма сортировки выбором по убыванию работает корректно", () => {
    cy.get("[value='selectionSort']").as("selectionSortButton");
    cy.get("[value='bubbleSort']").as("bubbleSortButton");
    cy.get("[data='ascending-button']").as("ascendingButton");
    cy.get("[data='descending-button']").as("descendingButton");
    cy.get("[data='new-array-button']").as("newArrayButton");

    cy.get("@descendingButton").click();
    cy.get("@descendingButton")
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get("@selectionSortButton").should("be.disabled");
    cy.get("@bubbleSortButton").should("be.disabled");
    cy.get("@ascendingButton").should("be.disabled");
    cy.get("@newArrayButton").should("be.disabled");

    cy.wait(1000);
  });

  it("Визуализация алгоритма сортировки пузырьком по возрастанию работает корректно", () => {
    cy.get("[value='selectionSort']").as("selectionSortButton");
    cy.get("label").last().as("bubbleSortLabel");
    cy.get("[value='bubbleSort']").as("bubbleSortButton");
    cy.get("[data='ascending-button']").as("ascendingButton");
    cy.get("[data='descending-button']").as("descendingButton");
    cy.get("[data='new-array-button']").as("newArrayButton");

    cy.get("@bubbleSortLabel").click();
    cy.get("@ascendingButton").click();
    cy.get("@ascendingButton")
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get("@selectionSortButton").should("be.disabled");
    cy.get("@bubbleSortButton").should("be.disabled");
    cy.get("@descendingButton").should("be.disabled");
    cy.get("@newArrayButton").should("be.disabled");

    cy.wait(1000);
  });

  it("Визуализация алгоритма сортировки пузырьком по убыванию работает корректно", () => {
    cy.get("[value='selectionSort']").as("selectionSortButton");
    cy.get("label").last().as("bubbleSortLabel");
    cy.get("[value='bubbleSort']").as("bubbleSortButton");
    cy.get("[data='ascending-button']").as("ascendingButton");
    cy.get("[data='descending-button']").as("descendingButton");
    cy.get("[data='new-array-button']").as("newArrayButton");

    cy.get("@bubbleSortLabel").click();
    cy.get("@descendingButton").click();
    cy.get("@descendingButton")
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get("@selectionSortButton").should("be.disabled");
    cy.get("@bubbleSortButton").should("be.disabled");
    cy.get("@ascendingButton").should("be.disabled");
    cy.get("@newArrayButton").should("be.disabled");

    cy.wait(1000);
  });
});
