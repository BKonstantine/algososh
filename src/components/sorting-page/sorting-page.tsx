import { FC, useState } from "react";
import style from "./sorting-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Direction } from "../../types/direction";
import { Column } from "../ui/column/column";
import { randomArr } from "./utils";
import { ElementStates, SortTypes } from "../../types/element-states";

export const SortingPage: FC = () => {
  const [array, setArray] = useState<SortTypes[]>();

  const getNewArray = () => {
    const newArray = randomArr();
    setArray(newArray);
  };

  return (
    <SolutionLayout title="Сортировка массива">
      <div className={style.form}>
        <div className={style.form__radioButtons}>
          <RadioInput label="Выбор" name="radio" />
          <RadioInput label="Пузырёк" name="radio" />
        </div>
        <div className={style.form__buttons}>
          <Button text="По возрастанию" sorting={Direction.Ascending} />
          <Button text="По убыванию" sorting={Direction.Descending} />
          <Button text="Новый массив" onClick={getNewArray} />
        </div>
      </div>
      <ul className={style.symbolList}>
        {array?.map((item) => {
          return <Column index={item.index} />;
        })}
      </ul>
    </SolutionLayout>
  );
};
