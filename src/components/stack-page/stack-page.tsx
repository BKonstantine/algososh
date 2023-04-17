import { ChangeEvent, FC, useState } from "react";
import style from "./stack-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { stack } from "./Stack";

export const StackPage: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <SolutionLayout title="Стек">
      <div className={style.form}>
        <Input
          maxLength={4}
          isLimitText
          onChange={onChange}
          value={inputValue}
        />
        <Button text="Добавить" type="button" disabled={!!!inputValue} />
        <Button text="Удалить" type="button" disabled={false} />
        <Button
          text="Очистить"
          type="button"
          disabled={false}
          extraClass={style.button}
        />
      </div>
      <ul className={style.symbolList}></ul>
    </SolutionLayout>
  );
};
