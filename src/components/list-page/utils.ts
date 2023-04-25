import { ElementTypes } from "../../types/element-states";
import { ElementStates } from "../../types/element-states";

export function randomArr(min: number, max: number): ElementTypes[] {
  const minLen = min;
  const maxLen = max;
  const len = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen;
  const arr: ElementTypes[] = [];
  for (let i = 0; i < len; i++) {
    const randInt = Math.floor(Math.random() * 101);
    arr.push({ letter: String(randInt), state: ElementStates.Default });
  }
  return arr;
}
