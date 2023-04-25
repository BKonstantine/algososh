import { ChangeEvent, FC, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import style from "./list-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { linkedList, NodeType } from "./LinkedList";
import { makeLinkedList } from "./utils";
import { ElementTypes } from "../../types/element-states";
import { ElementStates } from "../../types/element-states";
import { ArrowIcon } from "../ui/icons/arrow-icon";
import { Circle } from "../ui/circle/circle";
import { setDelay } from "../../utils/set-delay";
import { SHORT_DELAY_IN_MS } from "../../constants/delays";

export const ListPage: FC = () => {
  const [array, setArray] = useState<NodeType<ElementTypes>[]>();  
  const [loader, setLoader] = useState({
    addToHead: false,
    addToTail: false,
    deleteInHead: false,
    deleteInTail: false,
    addToIndex: false,
    deleteToIndex: false,
    disabled: false,
  });
  const [inputValue, setInputValue] = useState({
    value: "",
    index: "",
  });

  const listSize = linkedList.getSize();

  useEffect(() => {
    makeLinkedList();
    setArray(linkedList.getArray());
  }, []);

  const addToFront = async () => {
    setLoader({ ...loader, addToHead: true, disabled: true });
    const node = { letter: inputValue.value, state: ElementStates.Default };
    linkedList.addToFront(node);
    await setDelay(SHORT_DELAY_IN_MS);
    setArray([...linkedList.getArray()]);
    setInputValue({ value: "", index: "" });
    setLoader({ ...loader, addToHead: false, disabled: false });
  };

  const addToEnd = async () => {
    setLoader({ ...loader, addToTail: true, disabled: true });
    const node = { letter: inputValue.value, state: ElementStates.Default };
    linkedList.addToEnd(node);
    await setDelay(SHORT_DELAY_IN_MS);
    setArray([...linkedList.getArray()]);
    setLoader({ ...loader, addToTail: false, disabled: false });
  };

  const deleteAtFront = async () => {
    setLoader({ ...loader, deleteInHead: true, disabled: true });
    linkedList.deleteAtFront();
    await setDelay(SHORT_DELAY_IN_MS);
    setArray([...linkedList.getArray()]);
    setLoader({ ...loader, deleteInHead: false, disabled: false });
  };

  const deleteAtEnd = async () => {
    setLoader({ ...loader, deleteInTail: true, disabled: true });
    linkedList.deleteAtEnd();
    await setDelay(SHORT_DELAY_IN_MS);
    setArray([...linkedList.getArray()]);
    setLoader({ ...loader, deleteInTail: false, disabled: false });
  };

  const addAtIndex = async () => {
    setLoader({ ...loader, addToIndex: true, disabled: true });
    const node = { letter: inputValue.value, state: ElementStates.Default };
    linkedList.addAtIndex(Number(inputValue.index), node);
    await setDelay(SHORT_DELAY_IN_MS);
    setArray([...linkedList.getArray()]);
    setLoader({ ...loader, addToIndex: false, disabled: false });
  };

  const deleteAtIndex = async () => {
    setLoader({ ...loader, deleteToIndex: true, disabled: true });
    linkedList.deleteAtIndex(Number(inputValue.index));
    await setDelay(SHORT_DELAY_IN_MS);
    setArray([...linkedList.getArray()]);
    setLoader({ ...loader, deleteToIndex: false, disabled: false });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const showHeadCircle = () => {
    return (
      <Circle
        letter={inputValue.value}
        isSmall
        state={ElementStates.Changing}
      />
    );
  };

  const showTailCircle = () => {
    return (
      <Circle
        letter={inputValue.value}
        isSmall
        state={ElementStates.Changing}
      />
    );
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
            value={inputValue.value}
            onChange={onChange}
          />
          <Button
            type="button"
            text="Добавить в head"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={addToFront}
            disabled={!!!inputValue.value || loader.disabled}
            isLoader={loader.addToHead}
          />
          <Button
            type="button"
            text="Добавить в tail"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={addToEnd}
            disabled={!!!inputValue.value || loader.disabled}
            isLoader={loader.addToTail}
          />
          <Button
            type="button"
            text="Удалить из head"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={deleteAtFront}
            disabled={!!!listSize || loader.disabled}
            isLoader={loader.deleteInHead}
          />
          <Button
            type="button"
            text="Удалить из tail"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={deleteAtEnd}
            disabled={!!!listSize || loader.disabled}
            isLoader={loader.deleteInTail}
          />
        </div>
        <div className={style.form__container}>
          <Input
            type="number"
            placeholder="Введите индекс"
            name="index"
            min={0}
            max={linkedList.getSize() - 1}
            value={inputValue.index}
            onChange={onChange}
          />
          <Button
            type="button"
            text="Добавить по индексу"
            extraClass={`${style.button} ${style.button_size_large}`}
            onClick={addAtIndex}
            disabled={
              !!!(inputValue.index && inputValue.value) || loader.disabled
            }
            isLoader={loader.addToIndex}
          />
          <Button
            type="button"
            text="Удалить по индексу"
            extraClass={`${style.button} ${style.button_size_large}`}
            onClick={deleteAtIndex}
            disabled={!!!inputValue.index || loader.disabled}
            isLoader={loader.deleteToIndex}
          />
        </div>
      </div>
      <ul className={style.symbolList}>
        {array?.map((item, index) => {
          return (
            <li className={style.symbolList__item} key={nanoid()}>
              <Circle
                extraClass={style.circle}
                index={index}
                letter={item.val.letter}
                state={item.val.state}
                head={showHeadCircle()}
                tail={showTailCircle()}
              />
              {item.next && <ArrowIcon />}
            </li>
          );
        })}
      </ul>
    </SolutionLayout>
  );
};
