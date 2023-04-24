import { ChangeEvent, FC, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import style from "./list-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { linkedList } from "./LinkedList";
import { makeLinkedList } from "./utils";
import { ElementTypes } from "../../types/element-states";
import { ElementStates } from "../../types/element-states";
import { ArrowIcon } from "../ui/icons/arrow-icon";
import { Circle } from "../ui/circle/circle";

export const ListPage: FC = () => {
  const [array, setArray] = useState<ElementTypes[]>();
  const [inputValue, setInputValue] = useState({
    value: "",
    index: 0,
  });

  useEffect(() => {
    makeLinkedList();
    setArray(linkedList.getArray());
  }, []);

  const addToFront = () => {
    const node = { letter: inputValue.value, state: ElementStates.Default };
    linkedList.addToFront(node);
    setArray([...linkedList.getArray()]);
  };

  const addToEnd = () => {
    const node = { letter: inputValue.value, state: ElementStates.Default };
    linkedList.addToEnd(node);
    setArray([...linkedList.getArray()]);
  };

  const deleteAtFront = () => {
    linkedList.deleteAtFront();
    setArray([...linkedList.getArray()]);
  };

  const deleteAtEnd = () => {
    linkedList.deleteAtEnd();
    setArray([...linkedList.getArray()]);
  };

  const addAtIndex = () => {
    const node = { letter: inputValue.value, state: ElementStates.Default };
    linkedList.addAtIndex(inputValue.index, node);
    setArray([...linkedList.getArray()]);
  };

  const deleteAtIndex = () => {
    linkedList.deleteAtIndex(inputValue.index);
    setArray([...linkedList.getArray()]);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <SolutionLayout title="Связный список">
      <div className={style.form}>
        <div className={style.form__container}>
          <Input
            maxLength={4}
            isLimitText
            placeholder="Введите значение"
            name="value"
            onChange={onChange}
          />
          <Button
            type="button"
            text="Добавить в head"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={addToFront}
          />
          <Button
            type="button"
            text="Добавить в tail"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={addToEnd}
          />
          <Button
            type="button"
            text="Удалить из head"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={deleteAtFront}
          />
          <Button
            type="button"
            text="Удалить из tail"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={deleteAtEnd}
          />
        </div>
        <div className={style.form__container}>
          <Input
            type="number"
            placeholder="Введите индекс"
            name="index"
            onChange={onChange}
          />
          <Button
            type="button"
            text="Добавить по индексу"
            extraClass={`${style.button} ${style.button_size_large}`}
            onClick={addAtIndex}
          />
          <Button
            type="button"
            text="Удалить по индексу"
            extraClass={`${style.button} ${style.button_size_large}`}
            onClick={deleteAtIndex}
          />
        </div>
      </div>
      <ul className={style.symbolList}>
        {array?.map((item, index) => {
          return (
            <li className={style.symbolList__item} key={nanoid()}>
              {false && (
                <Circle
                  isSmall
                  extraClass={`${style.circle} ${style.circle__type_add}`}
                />
              )}
              <Circle
                extraClass={style.circle}
                index={index}
                letter={item.letter}
                state={item.state}
              />
              {false && (
                <Circle
                  isSmall
                  extraClass={`${style.circle} ${style.circle__type_delete}`}
                />
              )}
              {true && <ArrowIcon />}
            </li>
          );
        })}
      </ul>
    </SolutionLayout>
  );
};
