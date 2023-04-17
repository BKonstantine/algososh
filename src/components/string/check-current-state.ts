import { ElementStates } from "../../types/element-states";

export function checkCurrentState(
  array: string[],
  index: number,
  currentIndex: number
): ElementStates {
  const length = array.length - 1;
  if (currentIndex === index || currentIndex === length - index) {
    return ElementStates.Changing;
  } else if (currentIndex < index || currentIndex > length - index) {
    return ElementStates.Modified;
  } else {
    return ElementStates.Default;
  }
}
