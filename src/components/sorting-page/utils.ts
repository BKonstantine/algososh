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

const swap = (value: SortTypes[], firstItem: number, secondItem: number) => {
  return ([value[firstItem], value[secondItem]] = [
    value[secondItem],
    value[firstItem],
  ]);
};

export const selectionSort = (arr: SortTypes[], /* direction: Direction */) => {
  const { length } = arr;
  for (let i = 0; i < length - 1; i++) {
    let maxInd = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[maxInd] < arr[j]) {
        maxInd = j;
      }
    }
    /* if (direction === Direction.Ascending) {
      for (let j = i + 1; j < length; j++) {
        if (arr[maxInd] < arr[j]) {
          maxInd = j;
        }
      }
    } else {
      for (let j = i + 1; j < length; j++) {
        if (arr[maxInd] > arr[j]) {
          maxInd = j;
        }
      }
    } */

    if (maxInd !== i) {
      swap(arr, maxInd, i);
    }
  }
};
