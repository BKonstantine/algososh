import { ElementTypes } from "../../types/element-states";

export const swap = (
  value: ElementTypes[],
  firstItem: number,
  secondItem: number
) => {
  return ([value[firstItem], value[secondItem]] = [
    value[secondItem],
    value[firstItem],
  ]);
};
