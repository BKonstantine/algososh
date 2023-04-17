import { ChangeEvent, FC, useState } from "react";
import style from "./string.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";

export const StringComponent: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <SolutionLayout title="Строка" extraClass={style.container}>
      <form className={style.form}>
        <Input
          maxLength={11}
          isLimitText
          onChange={onChange}
          value={inputValue}
        />
        <Button text="Развернуть" isLoader />
      </form>
      <ul className={style.symbolList}>
        <Circle />
      </ul>
    </SolutionLayout>
  );
};
