import { ChangeEvent, FC, useState } from "react";
import { nanoid } from "nanoid";
import style from "./sorting-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Direction } from "../../types/direction";
import { Column } from "../ui/column/column";
import { randomArr, swap } from "./utils";
import { ElementStates, SortTypes } from "../../types/element-states";
import { setDelay } from "../../utils/set-delay";
import { SHORT_DELAY_IN_MS } from "../../constants/delays";

export const SortingPage: FC = () => {
  const [radioValue, setRadioValue] = useState("selectionSort");
  const [array, setArray] = useState<SortTypes[]>(randomArr());
  const [loader, setLoader] = useState({
    ascending: false,
    descending: false,
    loader: false,
  });

  const getNewArray = () => {
    setArray(randomArr());
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  const handleSort = (order: Direction) => {
    if (radioValue === "selectionSort") {
      selectionSort(array, order);
    } else {
      bubbleSort(array, order);
    }
  };

  const selectionSort = async (arr: SortTypes[], order: Direction) => {
    if (order === Direction.Ascending) {
      setLoader({ ...loader, loader: true, ascending: true });
    } else {
      setLoader({ ...loader, loader: true, descending: true });
    }
    const { length } = arr;
    for (let i = 0; i < length; i++) {
      let maxInd = i;
      arr[maxInd].state = ElementStates.Changing;
      for (let j = i + 1; j < length; j++) {
        arr[j].state = ElementStates.Changing;
        setArray([...arr]);
        await setDelay(SHORT_DELAY_IN_MS);
        if (
          order === Direction.Ascending
            ? arr[j].index < arr[maxInd].index
            : arr[j].index > arr[maxInd].index
        ) {
          maxInd = j;
          arr[j].state = ElementStates.Changing;
          arr[maxInd].state =
            i === maxInd ? ElementStates.Changing : ElementStates.Default;
        }
        if (j !== maxInd) {
          array[j].state = ElementStates.Default;
        }
        setArray([...arr]);
      }
      swap(array, maxInd, i);
      array[maxInd].state = ElementStates.Default;
      array[i].state = ElementStates.Modified;
      setArray([...array]);
    }
    setLoader({ loader: false, descending: false, ascending: false });    
  };

   const bubbleSort = (arr: SortTypes[], order: Direction) => {
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
            disabled={loader.loader}
          />
          <RadioInput
            label="Пузырёк"
            name="sortType"
            value="bubbleSort"
            onChange={onChange}
            disabled={loader.loader}
          />
        </div>
        <div className={style.form__buttons}>
          <Button
            text="По возрастанию"
            sorting={Direction.Ascending}
            onClick={() => handleSort(Direction.Ascending)}
            isLoader={loader.ascending}
            disabled={loader.descending}
            extraClass={style.button}
          />
          <Button
            text="По убыванию"
            sorting={Direction.Descending}
            onClick={() => handleSort(Direction.Descending)}
            isLoader={loader.descending}
            disabled={loader.ascending}
            extraClass={style.button}
          />
          <Button
            text="Новый массив"
            onClick={getNewArray}
            disabled={loader.loader}
          />
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
