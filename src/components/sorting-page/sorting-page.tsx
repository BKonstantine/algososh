import { ChangeEvent, FC, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import style from "./sorting-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Direction } from "../../types/direction";
import { Column } from "../ui/column/column";
import { randomArr, swap } from "./utils";
import { ElementStates, SortTypes } from "../../types/element-states";

export const SortingPage: FC = () => {
  const [radioValue, setRadioValue] = useState("selectionSort");
  const [array, setArray] = useState<SortTypes[]>(randomArr());

  const getNewArray = () => {
    setArray(randomArr());
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  const handleSort = (order: Direction) => {
    if (radioValue === "selectionSort") {
      selectionSort(array, order);
    } /* else {
      bubbleSort(array, order);
    } */
  };

  const selectionSort = (arr: SortTypes[], order: Direction) => {       
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
          setArray([...arr]);
        }        
      }
      if (maxInd !== i) {
        swap(arr, maxInd, i);
      }      
    }
    console.log(arr);
  };

  /*  const bubbleSort = (arr: SortTypes[], order: Direction) => {
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
  }; */

  return (
    <SolutionLayout title="Сортировка массива">
      <div className={style.form}>
        <div className={style.form__radioButtons}>
          <RadioInput
            label="Выбор"
            name="sortType"
            value="selectionSort"
            defaultChecked
            onChange={onChange}
          />
          <RadioInput
            label="Пузырёк"
            name="sortType"
            value="bubbleSort"
            onChange={onChange}
          />
        </div>
        <div className={style.form__buttons}>
          <Button
            text="По возрастанию"
            sorting={Direction.Ascending}
            onClick={() => handleSort(Direction.Ascending)}
          />
          <Button
            text="По убыванию"
            sorting={Direction.Descending}
            onClick={() => handleSort(Direction.Descending)}
          />
          <Button text="Новый массив" onClick={getNewArray} />
        </div>
      </div>
      <ul className={style.symbolList}>
        {array?.map((item) => {
          return (
            <Column key={nanoid()} index={item.index} state={item.state} />
          );
        })}
      </ul>
    </SolutionLayout>
  );
};
