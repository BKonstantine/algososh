import { ElementStates, SortTypes } from "../../types/element-states";

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
