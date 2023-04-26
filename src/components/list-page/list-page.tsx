import { ChangeEvent, FC, useState } from "react";
import { nanoid } from "nanoid";
import style from "./list-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { linkedList, NodeType } from "./LinkedList";
import { ElementStates } from "../../types/element-states";
import { ArrowIcon } from "../ui/icons/arrow-icon";
import { Circle } from "../ui/circle/circle";
import { setDelay } from "../../utils/set-delay";
import { SHORT_DELAY_IN_MS } from "../../constants/delays";
import { CirclePosition } from "../../types/element-states";
import { setCircleState } from "./utils";

export const ListPage: FC = () => {
  const [state, setState] = useState({
    modifiedIndex: -1,
    changingIndex: -1,
  });
  const [array, setArray] = useState<NodeType<string>[]>(linkedList.getArray());
  const [loader, setLoader] = useState({
    addToHead: false,
    addToTail: false,
    deleteInHead: false,
    deleteInTail: false,
    addToIndex: false,
    deleteToIndex: false,
    disabled: false,
  });
  const [circleIndex, setCircleIndex] = useState(-1);
  const [position, setPosition] = useState<CirclePosition>();
  const [currentValue, setCurrentValue] = useState("");
  const [inputValue, setInputValue] = useState({
    value: "",
    index: "",
  });

  const addToFront = async () => {
    setLoader({ ...loader, addToHead: true, disabled: true });
    setCurrentValue(inputValue.value);
    setCircleIndex(0);
    setPosition(CirclePosition.head);
    await setDelay(SHORT_DELAY_IN_MS);
    setCircleIndex(-1);
    linkedList.addToFront(inputValue.value);
    setArray([...linkedList.getArray()]);
    setState({ ...state, modifiedIndex: 0 });
    await setDelay(SHORT_DELAY_IN_MS);
    setState({ ...state, modifiedIndex: -1 });
    setInputValue({ value: "", index: "" });
    setLoader({ ...loader, addToHead: false, disabled: false });
  };

  const addToEnd = async () => {
    setLoader({ ...loader, addToTail: true, disabled: true });
    setCurrentValue(inputValue.value);
    setCircleIndex(linkedList.getSize() - 1);
    setPosition(CirclePosition.head);
    await setDelay(SHORT_DELAY_IN_MS);
    setCircleIndex(-1);
    linkedList.addToEnd(inputValue.value);
    setArray([...linkedList.getArray()]);
    setState({ ...state, modifiedIndex: linkedList.getSize() - 1 });
    await setDelay(SHORT_DELAY_IN_MS);
    setState({ ...state, modifiedIndex: -1 });
    setInputValue({ value: "", index: "" });
    setLoader({ ...loader, addToTail: false, disabled: false });
  };

  const deleteAtFront = async () => {
    setLoader({ ...loader, deleteInHead: true, disabled: true });
    setCurrentValue(linkedList.getFirst()!.val);
    linkedList.getFirst()!.val = "";
    setCircleIndex(0);
    setPosition(CirclePosition.tail);
    await setDelay(SHORT_DELAY_IN_MS);
    linkedList.deleteAtFront();
    setCircleIndex(-1);
    setArray([...linkedList.getArray()]);
    await setDelay(SHORT_DELAY_IN_MS);
    setInputValue({ value: "", index: "" });
    setLoader({ ...loader, deleteInHead: false, disabled: false });
  };

  const deleteAtEnd = async () => {
    setLoader({ ...loader, deleteInTail: true, disabled: true });
    setCurrentValue(linkedList.getLast()!.val);
    linkedList.getLast()!.val = "";
    setCircleIndex(linkedList.getSize() - 1);
    setPosition(CirclePosition.tail);
    await setDelay(SHORT_DELAY_IN_MS);
    linkedList.deleteAtEnd();
    setCircleIndex(-1);
    setArray([...linkedList.getArray()]);
    await setDelay(SHORT_DELAY_IN_MS);    
    setInputValue({ value: "", index: "" });
    setLoader({ ...loader, deleteInTail: false, disabled: false });
  };

  const addAtIndex = async () => {
    setLoader({ ...loader, addToIndex: true, disabled: true });
    linkedList.addAtIndex(Number(inputValue.index), inputValue.value);
    await setDelay(SHORT_DELAY_IN_MS);
    setArray([...linkedList.getArray()]);
    setInputValue({ value: "", index: "" });
    setLoader({ ...loader, addToIndex: false, disabled: false });
  };

  const deleteAtIndex = async () => {
    setLoader({ ...loader, deleteToIndex: true, disabled: true });
    linkedList.deleteAtIndex(Number(inputValue.index));
    await setDelay(SHORT_DELAY_IN_MS);
    setArray([...linkedList.getArray()]);
    setInputValue({ value: "", index: "" });
    setLoader({ ...loader, deleteToIndex: false, disabled: false });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const showHeadCircle = (index: number) => {
    if (circleIndex === index && position === CirclePosition.head) {
      return (
        <Circle isSmall letter={currentValue} state={ElementStates.Changing} />
      );
    } else if (index === 0) {
      return "head";
    } else {
      return undefined;
    }
  };

  const showTailCircle = (index: number) => {
    if (circleIndex === index && position === CirclePosition.tail) {
      return (
        <Circle isSmall letter={currentValue} state={ElementStates.Changing} />
      );
    } else if (index === array.length - 1) {
      return "tail";
    } else {
      return undefined;
    }
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
            disabled={
              !!!inputValue.value || loader.disabled || array.length === 7
            }
            isLoader={loader.addToHead}
          />
          <Button
            type="button"
            text="Добавить в tail"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={addToEnd}
            disabled={
              !!!inputValue.value || loader.disabled || array.length === 7
            }
            isLoader={loader.addToTail}
          />
          <Button
            type="button"
            text="Удалить из head"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={deleteAtFront}
            disabled={!!!array || loader.disabled || array.length === 0}
            isLoader={loader.deleteInHead}
          />
          <Button
            type="button"
            text="Удалить из tail"
            extraClass={`${style.button} ${style.button_size_small}`}
            onClick={deleteAtEnd}
            disabled={!!!array || loader.disabled || array.length === 0}
            isLoader={loader.deleteInTail}
          />
        </div>
        <div className={style.form__container}>
          <Input
            type="number"
            placeholder="Введите индекс"
            name="index"
            min={0}
            max={array.length - 1}
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
                letter={item.val}
                state={setCircleState(index, state)}
                head={showHeadCircle(index)}
                tail={showTailCircle(index)}
              />
              {index !== array.length - 1 && <ArrowIcon />}
            </li>
          );
        })}
      </ul>
    </SolutionLayout>
  );
};
