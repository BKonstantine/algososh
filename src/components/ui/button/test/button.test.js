import TestRenderer from "react-test-renderer";

import { Button } from "../button";

describe("Тест компонента Button", () => {
  test("Компонент Button с текстом отрисован корректно", () => {
    const button = TestRenderer.create(<Button text="Сортировать" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button без текста отрисован корректно", () => {
    const button = TestRenderer.create(<Button text="" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button в заблокированном состоянии отрисован корректно", () => {
    const button = TestRenderer.create(<Button disabled />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button с индикацией загрузки отрисован корректно", () => {
    const button = TestRenderer.create(<Button isLoader />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
