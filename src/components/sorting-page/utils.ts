import { ElementStates, SortTypes } from "../../types/element-states";
import { Direction } from "../../types/direction";

export function randomArr(): SortTypes[] {
  const minLen = 3;
  const maxLen = 17;
  const len = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;
  const arr: SortTypes[] = [];
  for (let i = 0; i < len; i++) {
    const randInt = Math.floor(Math.random() * 101);
    arr.push({ index: randInt, state: ElementStates.Default });
  }
  return arr;
}

export const swap = (
  value: SortTypes[],
  firstItem: number,
  secondItem: number
) => {
  return ([value[firstItem], value[secondItem]] = [
    value[secondItem],
    value[firstItem],
  ]);
};

export const selectionSort = (arr: SortTypes[], order: Direction) => {
  const { length } = arr;
  for (let i = 0; i < length - 1; i++) {
    let maxInd = i;
    for (let j = i + 1; j < length; j++) {
      if (
        order === Direction.Ascending
          ? arr[j].index < arr[maxInd].index
          : arr[j].index > arr[maxInd].index
      ) {
        maxInd = j;
      }
    }
    swap(arr, maxInd, i);
  }
};

export const bubbleSort = async (arr: SortTypes[], order: Direction) => {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (
        order === Direction.Ascending
          ? arr[j].index > arr[j + 1].index
          : arr[j].index < arr[j + 1].index
      ) {
        swap(arr, j, j + 1);
      }
    }
  }
};
