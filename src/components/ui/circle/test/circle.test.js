import TestRenderer from "react-test-renderer";
import { Circle } from "../circle";
import { ElementStates } from "../../../../types/element-states";

describe("Тест компонента Circle", () => {
  test("Компонент Circle без букв отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle letter="" />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle с буквами отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle letter="Text" />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle с head отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle head="head" />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle с react-элементом в head отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle head={<Circle />} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle с tail отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle tail="tail" />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle с react-элементом в tail отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle tail={<Circle />} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle с index отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle index={1} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle с пропом isSmall отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle isSmall />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle в состоянии Default отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle state={ElementStates.Default} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle в состоянии Changing отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle state={ElementStates.Changing} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
  test("Компонент Circle в состоянии Modified отрисован корректно", () => {
    const circle = TestRenderer.create(<Circle state={ElementStates.Modified} />).toJSON();
    expect(circle).toMatchSnapshot();
  });
});
