import {
  selectionSortInput,
  bubbleSortInput,
  ascendingButton,
  descendingButton,
  newArrayButton,
  radioInputLabels,
} from "../variables";

describe("Проверка визуализации алгоритмов сортировки", () => {
  beforeEach(() => {    
    cy.visit("/sorting");
  });

  it("Кнопки активны, радио-кнопка 'Выбор' активна", () => {
    cy.get(selectionSortInput).should("be.checked");
    cy.get(bubbleSortInput).should("not.be.checked");
    cy.get(ascendingButton).should("not.be.disabled");
    cy.get(descendingButton).should("not.be.disabled");
    cy.get(newArrayButton).should("not.be.disabled");
    cy.wait(1000);
  });

  it("Визуализация алгоритма сортировки выбором по возрастанию работает корректно", () => {
    cy.get(ascendingButton).click();
    cy.get(ascendingButton)
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get(selectionSortInput).should("be.disabled");
    cy.get(bubbleSortInput).should("be.disabled");
    cy.get(descendingButton).should("be.disabled");
    cy.get(newArrayButton).should("be.disabled");
    cy.wait(1000);
  });

  it("Визуализация алгоритма сортировки выбором по убыванию работает корректно", () => {
    cy.get(descendingButton).click();
    cy.get(descendingButton)
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get(selectionSortInput).should("be.disabled");
    cy.get(bubbleSortInput).should("be.disabled");
    cy.get(ascendingButton).should("be.disabled");
    cy.get(newArrayButton).should("be.disabled");
    cy.wait(1000);
  });

  it("Визуализация алгоритма сортировки пузырьком по возрастанию работает корректно", () => {
    cy.get(radioInputLabels).last().as("bubbleSortLabel");

    cy.get("@bubbleSortLabel").click();
    cy.get(ascendingButton).click();
    cy.get(ascendingButton)
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get(selectionSortInput).should("be.disabled");
    cy.get(bubbleSortInput).should("be.disabled");
    cy.get(descendingButton).should("be.disabled");
    cy.get(newArrayButton).should("be.disabled");
    cy.wait(1000);
  });

  it("Визуализация алгоритма сортировки пузырьком по убыванию работает корректно", () => {
    cy.get(radioInputLabels).last().as("bubbleSortLabel");

    cy.get("@bubbleSortLabel").click();
    cy.get(descendingButton).click();
    cy.get(descendingButton)
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get(selectionSortInput).should("be.disabled");
    cy.get(bubbleSortInput).should("be.disabled");
    cy.get(ascendingButton).should("be.disabled");
    cy.get(newArrayButton).should("be.disabled");
    cy.wait(1000);
  });
});
