import { ChangeEvent, FC, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import style from "./sorting-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Direction } from "../../types/direction";
import { Column } from "../ui/column/column";
import { randomArr } from "./utils";
import { ElementStates, SortTypes } from "../../types/element-states";

export const SortingPage: FC = () => {
  const [radioValue, setRadioValue] = useState("selectionSort");
  const [order, setOrder] = useState("");
  const [array, setArray] = useState<SortTypes[]>(randomArr());

  const getNewArray = () => {
    setArray(randomArr());
  };  

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  const ascendingSort = () => {
    setOrder(Direction.Ascending);
  };

  const descendingSort = () => {
    setOrder(Direction.Descending);
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
          />
          <RadioInput
            label="Пузырёк"
            name="sortType"
            value="bubblesort"
            onChange={onChange}
          />
        </div>
        <div className={style.form__buttons}>
          <Button
            text="По возрастанию"
            sorting={Direction.Ascending}
            onClick={ascendingSort}
          />
          <Button
            text="По убыванию"
            sorting={Direction.Descending}
            onClick={descendingSort}
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
