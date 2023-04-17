import { ChangeEvent, FC, FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import style from "./string.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { StringItemTypes } from "./string-types";
import { ElementStates } from "../../types/element-states";

export const StringComponent: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [array, setArray] = useState<Array<StringItemTypes>>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newArray = inputValue.split("").map((value: string) => {
      return { value, state: ElementStates.Default };
    });
    setArray(newArray);
    setLoader(true);
  };

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
        {array?.map((item) => (
          <Circle key={nanoid()} letter={item.value} state={item.state} />
        ))}
      </ul>
    </SolutionLayout>
  );
};
