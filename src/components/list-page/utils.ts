import { linkedList } from "./LinkedList";
import { ElementStates } from "../../types/element-states";

export const makeLinkedList = () => {
  const array = ["0", "34", "8", "1"];
  return array.forEach((item) => {
    linkedList.addToEnd({ letter: item, state: ElementStates.Default });
  });
};
