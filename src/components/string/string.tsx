import { ChangeEvent, FC, FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import style from "./string.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { checkCurrentState } from "./check-current-state";

export const StringComponent: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [array, setArray] = useState<Array<string>>();
  const [currentIndex, setCurrentIndex] = useState(0);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newArray = inputValue.split("");
    setArray(newArray);
    setLoader(true);
  }

  return (
    <SolutionLayout title="Строка" extraClass={style.container}>
      <form className={style.form} onSubmit={onSubmit}>
        <Input
          maxLength={11}
          isLimitText
          onChange={onChange}
          value={inputValue}
        />
        <Button text="Развернуть" isLoader={loader} type="submit" />
      </form>
      <ul className={style.symbolList}>
        {array?.map((item, index) => (
          <Circle
            key={nanoid()}
            letter={item}
            state={checkCurrentState(array, index, currentIndex)}
          />
        ))}
      </ul>
    </SolutionLayout>
  );
};
