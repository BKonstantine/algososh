import {
  circleItem,
  stateChanging,
  stateDefault,
  stateModified,
} from "../variables";

describe("Проверка визуализации структуры данных 'Стэк'", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000/recursion");
  });
});
