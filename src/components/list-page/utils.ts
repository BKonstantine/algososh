import {
  ElementTypes,
  ElementStates,
  CircleState,
} from "../../types/element-states";

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

export const setCircleState = (
  index: number,
  circleState: CircleState
): ElementStates => {
  return circleState.modifiedIndex === index
    ? ElementStates.Modified
    : circleState.changingIndex >= index
    ? ElementStates.Changing
    : ElementStates.Default;
};
