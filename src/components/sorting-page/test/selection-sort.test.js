import { selectionSortTest } from "../utils";
import { Direction } from "../../../types/direction";

describe("Тест алгоритма сортировки выбором", () => {
  test("Сортировка пустого массива по возрастанию выполнена корректно", () => {
    expect(selectionSortTest([], Direction.Ascending)).toEqual([]);
  });
  test("Сортировка пустого массива по убыванию выполнена корректно", () => {
    expect(selectionSortTest([], Direction.Descending)).toEqual([]);
  });
  test("Сортировка массива из одного элемента по возрастанию выполнена корректно", () => {
    expect(selectionSortTest([1], Direction.Ascending)).toEqual([1]);
  });
  test("Сортировка массива из одного элемента по убыванию выполнена корректно", () => {
    expect(selectionSortTest([1], Direction.Descending)).toEqual([1]);
  });
  test("Сортировка массива из нескольких элементов по возрастанию выполнена корректно", () => {
    expect(selectionSortTest([3, 1, 6, 7, 8], Direction.Ascending)).toEqual([
      1, 3, 6, 7, 8,
    ]);
  });
  test("Сортировка массива из нескольких элементов по убыванию выполнена корректно", () => {
    expect(selectionSortTest([3, 1, 6, 7, 8], Direction.Descending)).toEqual([
      8, 7, 6, 3, 1,
    ]);
  });
});
