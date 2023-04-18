import { ChangeEvent, FC, useState } from "react";
import style from "./queue-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { nanoid } from "nanoid";

export const QueuePage: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState<string[]>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <SolutionLayout title="Очередь">
      <div className={style.form}>
        <Input
          maxLength={4}
          isLimitText
          onChange={onChange}
          value={inputValue}
        />
        <Button text="Добавить" type="button" />
        <Button text="Удалить" type="button" />
        <Button text="Очистить" type="button" extraClass={style.button} />
      </div>
      <ul className={style.symbolList}>
        {array?.map((element, index) => {
          return <Circle key={nanoid()} index={index} letter={element} />;
        })}
      </ul>
    </SolutionLayout>
  );
};
