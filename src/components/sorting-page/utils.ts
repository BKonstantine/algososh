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

export const swap = (value: SortTypes[], firstItem: number, secondItem: number) => {
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
          ? arr[j] < arr[maxInd]
          : arr[j] > arr[maxInd]
      ) {
        maxInd = j;
      }
    }
    if (maxInd !== i) {
      swap(arr, maxInd, i);
    }
  }
};

export const bubbleSort = (arr: SortTypes[], order: Direction) => {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const shouldSwap =
        order === Direction.Ascending
          ? arr[i] > arr[i + 1]
          : arr[i] < arr[i + 1];
      if (shouldSwap) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped); 
};
