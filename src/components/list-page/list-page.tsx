import { FC } from "react";
import style from "./list-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";

export const ListPage: FC = () => {
  return (
    <SolutionLayout title="Связный список">
      <div className={style.form}>
        <div className={style.form__container}>
          <Input maxLength={4} isLimitText placeholder="Введите значение" />
          <Button
            type="button"
            text="Добавить в head"
            extraClass={`${style.button} ${style.button_size_small}`}
          />
          <Button
            type="button"
            text="Добавить в tail"
            extraClass={`${style.button} ${style.button_size_small}`}
          />
          <Button
            type="button"
            text="Удалить из head"
            extraClass={`${style.button} ${style.button_size_small}`}
          />
          <Button
            type="button"
            text="Удалить из tail"
            extraClass={`${style.button} ${style.button_size_small}`}
          />
        </div>
        <div className={style.form__container}>
          <Input type="number" placeholder="Введите индекс" />
          <Button
            type="button"
            text="Добавить по индексу"
            extraClass={`${style.button} ${style.button_size_large}`}
          />
          <Button
            type="button"
            text="Удалить по индексу"
            extraClass={`${style.button} ${style.button_size_large}`}
          />
        </div>
      </div>
    </SolutionLayout>
  );
};
