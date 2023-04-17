import { StringItemTypes } from "./string-types";

export const swap = (
  value: StringItemTypes[],
  firstItem: number,
  secondItem: number
) => {
  return ([value[firstItem], value[secondItem]] = [
    value[secondItem],
    value[firstItem],
  ]);
};
