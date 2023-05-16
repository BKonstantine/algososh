import { circleItem } from "../variables";
import { SHORT_DELAY_IN_MS } from "../../src/constants/delays";

describe("Проверка визуализации алгоритма Фибоначчи", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000/fibonacci");
  });

  it("Поле ввода пустое, кнопка 'Рассчитать' заблокировано", () => {
    cy.get("input").as("input");
    cy.get("button").last().as("button");
    cy.get("@input").should("have.value", "");
    cy.get("@button").should("be.disabled");
  });

  it("Визуализация алгоритма Фибоначчи работает корректно", () => {
    cy.get("input").as("input");
    cy.get("button").last().as("button");
    cy.get("@input").type(4);
    cy.get("@button").click();
    cy.get("@button")
      .invoke("attr", "class")
      .then((className) => expect(className).contains("loader"));

    cy.get(circleItem).as("circle");
    cy.get("@circle").then((item) => {
      cy.get(item[0]).children().should("have.text", "1");
    });
    cy.wait(SHORT_DELAY_IN_MS);

    cy.get("@circle").then((item) => {
      cy.get(item[0]).children().should("have.text", "1");
      cy.get(item[1]).children().should("have.text", "1");
    });
    cy.wait(SHORT_DELAY_IN_MS);

    cy.get("@circle").then((item) => {
      cy.get(item[0]).children().should("have.text", "1");
      cy.get(item[1]).children().should("have.text", "1");
      cy.get(item[2]).children().should("have.text", "2");
    });
    cy.wait(SHORT_DELAY_IN_MS);

    cy.get("@circle").then((item) => {
      cy.get(item[0]).children().should("have.text", "1");
      cy.get(item[1]).children().should("have.text", "1");
      cy.get(item[2]).children().should("have.text", "2");
      cy.get(item[3]).children().should("have.text", "3");
    });
    cy.wait(SHORT_DELAY_IN_MS);

    cy.get("@circle").then((item) => {
      cy.get(item[0]).children().should("have.text", "1");
      cy.get(item[1]).children().should("have.text", "1");
      cy.get(item[2]).children().should("have.text", "2");
      cy.get(item[3]).children().should("have.text", "3");
      cy.get(item[4]).children().should("have.text", "5");
    });
    cy.wait(SHORT_DELAY_IN_MS);

    cy.get("@input").should("have.value", "");
    cy.get("@button").should("be.disabled");
  });
});
