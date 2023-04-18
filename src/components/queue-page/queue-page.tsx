import { ChangeEvent, FC, useState } from "react";
import style from "./queue-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { nanoid } from "nanoid";
import { queue } from "./Queue";
import { setDelay } from "../../utils/set-delay";
import { SHORT_DELAY_IN_MS } from "../../constants/delays";
import { TAIL, HEAD } from "../../constants/element-captions";

export const QueuePage: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState<string[]>(queue.getElements());
  const [loader, setLoader] = useState({
    add: false,
    delete: false,
    clear: false,
  });

  console.log(queue.getHeadIndex(), queue.getTailIndex());

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addElement = () => {
    queue.enqueue(inputValue);
    setArray([...queue.getElements()]);
    setInputValue("");
  };

  const deleteElement = () => {
    queue.dequeue();
    setArray([...queue.getElements()]);
  };

  return (
    <SolutionLayout title="Очередь">
      <div className={style.form}>
        <Input
          maxLength={4}
          isLimitText
          onChange={onChange}
          value={inputValue}
          disabled={queue.isFull()}
        />
        <Button
          text="Добавить"
          type="button"
          onClick={addElement}
          isLoader={loader.add}
          disabled={!!!inputValue || queue.isFull()}
        />
        <Button
          text="Удалить"
          type="button"
          onClick={deleteElement}
          isLoader={loader.delete}
          disabled={queue.isEmpty()}
        />
        <Button
          text="Очистить"
          type="button"
          extraClass={style.button}
          isLoader={loader.clear}
          disabled={queue.isEmpty()}
        />
      </div>
      <ul className={style.symbolList}>
        {array?.map((element, index) => {
          return (
            <Circle
              key={nanoid()}
              index={index}
              letter={element}
              head={
                index === queue.getHeadIndex() && !queue.isEmpty() ? HEAD : ""
              }
              tail={
                index === queue.getTailIndex() - 1 && !queue.isEmpty()
                  ? TAIL
                  : ""
              }
            />
          );
        })}
      </ul>
    </SolutionLayout>
  );
};
