import TestRenderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../button";
import { Direction } from "../../../../types/direction";

describe("Тест компонента Button", () => {
  test("Компонент Button с текстом отрисован корректно", () => {
    const button = TestRenderer.create(<Button text="Сортировать" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button без текста отрисован корректно", () => {
    const button = TestRenderer.create(<Button text="" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button с типом 'button' отрисован корректно", () => {
    const button = TestRenderer.create(<Button type="button" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button с типом 'submit' отрисован корректно", () => {
    const button = TestRenderer.create(<Button type="submit" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button с типом 'reset' отрисован корректно", () => {
    const button = TestRenderer.create(<Button type="reset" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button с сортировкой по возрастанию отрисован корректно", () => {
    const button = TestRenderer.create(
      <Button sorting={Direction.Ascending} />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button с сортировкой по убыванию отрисован корректно", () => {
    const button = TestRenderer.create(
      <Button sorting={Direction.Descending} />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button размера 'small' отрисован корректно", () => {
    const button = TestRenderer.create(<Button linkedList="small" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  test("Компонент Button размера 'big' отрисован корректно", () => {
    const button = TestRenderer.create(<Button linkedList="big" />).toJSON();
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
  test("Колбек вызван корректно при клике на компонент Button", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });
});
