import { ChangeEvent, FC, useState } from "react";
import { nanoid } from "nanoid";
import style from "./stack-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { stack } from "./Stack";
import { Circle } from "../ui/circle/circle";

export const StackPage: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState<string[]>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addElement = () => {
    console.log("add");
    stack.push(inputValue);
    setArray([...stack.getElements()]);
    setInputValue("");
  };

  const deleteElement = () => {
    console.log("delete");
    stack.pop();
    setArray([...stack.getElements()]);
  };

  const clearElements = () => {
    console.log("clear");
    stack.clear();
    setArray([...stack.getElements()]);
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
        <Button
          text="Добавить"
          type="button"
          disabled={!!!inputValue}
          onClick={addElement}
        />
        <Button
          text="Удалить"
          type="button"
          disabled={false}
          onClick={deleteElement}
        />
        <Button
          text="Очистить"
          type="button"
          disabled={false}
          extraClass={style.button}
          onClick={clearElements}
        />
      </div>
      <ul className={style.symbolList}>
        {array?.map((element) => {
          return <Circle key={nanoid()} letter={element} />;
        })}
      </ul>
    </SolutionLayout>
  );
};
