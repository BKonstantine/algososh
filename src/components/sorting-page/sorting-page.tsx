import { FC } from "react";
import style from "./sorting-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { RadioInput } from "../ui/radio-input/radio-input";
import { Button } from "../ui/button/button";
import { Direction } from "../../types/direction";

export const SortingPage: FC = () => {
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
          <Button text="Новый массив" />
        </div>
      </div>
    </SolutionLayout>
  );
};
