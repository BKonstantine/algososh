import {
  circleItem,
  circleContent,
  circleSmall,
  stateChanging,
  stateDefault,
  stateModified,
  inputValue,
  inputIndex,
  addToHeadButton,
  addToTailButton,
  deleteFromHeadButton,
  deleteFromTailButton,
  addByIndexButton,
  deleteByIndexButton,
} from "../variables";
import { SHORT_DELAY_IN_MS } from "../../src/constants/delays";

const getDataFromCircle = (array) => {
  cy.get(circleItem).then((item) => {
    cy.get(item)
      .children()
      .each((el) => {
        array.push(el.text().trim());
      });
  });
};

describe("Проверка визуализации структуры данных 'Связанный список'", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:3000/list");
  });

  it("Начальное состояние страницы отображается корректно", () => {
    cy.get(inputValue).should("have.value", "");
    cy.get(inputIndex).should("have.value", "");
    cy.get(addToHeadButton).should("be.disabled");
    cy.get(addToTailButton).should("be.disabled");
    cy.get(deleteFromHeadButton).should("not.be.disabled");
    cy.get(deleteFromTailButton).should("not.be.disabled");
    cy.get(addByIndexButton).should("be.disabled");
    cy.get(deleteByIndexButton).should("be.disabled");
  });

/*   it("Удаление элемента из head работает корректно", () => {
    let circleData = [];
    getDataFromCircle(circleData);
    cy.get(deleteFromHeadButton).should("not.be.disabled");
    cy.get(deleteFromHeadButton).click();
    cy.get(deleteFromHeadButton)
      .invoke("attr", "class")
      .then((classList) => expect(classList).contains("loader"));
    cy.get(circleContent).then((item) => {
      cy.get(item[0])
        .children()
        .then((item) => {
          cy.get(item[1]).children().should("have.text", "");
        });
    });
    cy.get(circleContent).then((item) => {
      cy.get(item[0])
        .find(circleSmall)
        .invoke("attr", "class")
        .then((classList) => expect(classList).contains(stateChanging));
      cy.get(item[0])
        .find(circleSmall)
        .children()
        .should("have.text", circleData[0]);
    });
    cy.wait(SHORT_DELAY_IN_MS);
  }); */

/*   it("Удаление элемента из tail работает корректно", () => {
    let circleData = [];
    getDataFromCircle(circleData);
    cy.get(deleteFromTailButton).should("not.be.disabled");
    cy.get(deleteFromTailButton).click();
    cy.get(deleteFromTailButton)
      .invoke("attr", "class")
      .then((classList) => expect(classList).contains("loader"));
    cy.get(circleContent).then((item) => {
      cy.get(item[circleData.length - 1])
        .children()
        .then((item) => {
          cy.get(item[1]).children().should("have.text", "");
        });
    });
    cy.get(circleContent).then((item) => {
      cy.get(item[circleData.length - 1])
        .find(circleSmall)
        .invoke("attr", "class")
        .then((classList) => expect(classList).contains(stateChanging));
      cy.get(item[circleData.length - 1])
        .find(circleSmall)
        .children()
        .should("have.text", circleData[circleData.length - 1]);
    });
    cy.wait(SHORT_DELAY_IN_MS);
  }); */

/*   it("Добавление элемента в head работает корректно", () => {
    const number = "1";
    cy.get(inputValue).type(number);
    cy.get(addToHeadButton).should("not.be.disabled");
    cy.get(addToHeadButton).click();
    cy.get(addToHeadButton)
      .invoke("attr", "class")
      .then((classList) => expect(classList).contains("loader"));
    cy.get(circleContent).then((item) => {
      cy.get(item[0])
        .find(circleSmall)
        .invoke("attr", "class")
        .then((classList) => expect(classList).contains(stateChanging));
      cy.get(item[0]).find(circleSmall).children().should("have.text", number);
    });
    cy.wait(SHORT_DELAY_IN_MS);
    cy.get(circleItem).then((item) => {
      cy.get(item[0])
        .invoke("attr", "class")
        .then((classList) => expect(classList).contains(stateModified));
      cy.get(item[0]).children().should("have.text", number);
    });
    cy.wait(SHORT_DELAY_IN_MS);
    cy.get(circleItem).then((item) => {
      cy.get(item[0])
        .invoke("attr", "class")
        .then((classList) => expect(classList).contains(stateDefault));
    });
  }); */

  it("Добавление элемента в tail работает корректно", () => {
    const number = "1";
    let circleData = [];
    getDataFromCircle(circleData);
    cy.get(inputValue).type(number);
    cy.get(addToTailButton).should("not.be.disabled");
    cy.get(addToTailButton).click();
    cy.get(addToTailButton)
      .invoke("attr", "class")
      .then((classList) => expect(classList).contains("loader"));
    cy.get(circleContent).then((item) => {
      cy.get(item[circleData.length - 1])
        .find(circleSmall)
        .invoke("attr", "class")
        .then((classList) => expect(classList).contains(stateChanging));
      cy.get(item[circleData.length - 1]).find(circleSmall).children().should("have.text", number);
    });
    cy.wait(SHORT_DELAY_IN_MS);
    cy.get(circleItem).then((item) => {
      cy.get(item[circleData.length])
        .invoke("attr", "class")
        .then((classList) => expect(classList).contains(stateModified));
      cy.get(item[circleData.length]).children().should("have.text", number);
    });
    cy.wait(SHORT_DELAY_IN_MS);
    cy.get(circleItem).then((item) => {
      cy.get(item[circleData.length])
        .invoke("attr", "class")
        .then((classList) => expect(classList).contains(stateDefault));
    });
  });
});
