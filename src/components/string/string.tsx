import { ChangeEvent, FC, FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import style from "./string.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { setDelay } from "../../utils/set-delay";
import { DELAY_IN_MS } from "../../constants/delays";
import { swap } from "./utils";
import { ElementTypes } from "../../types/element-states";
import { ElementStates } from "../../types/element-states";

export const StringComponent: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [array, setArray] = useState<Array<ElementTypes>>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newArray = inputValue.split("").map((letter: string) => {
      return { letter, state: ElementStates.Default };
    });
    setArray(newArray);
    setLoader(true);
    const end = newArray.length - 1;
    const middle = Math.ceil(newArray.length / 2);

    for (let i = 0; i < middle; i++) {
      let j = end - i;

      if (i !== j) {
        newArray[i].state = ElementStates.Changing;
        newArray[j].state = ElementStates.Changing;
        setArray([...newArray]);
        await setDelay(DELAY_IN_MS);
      }
      swap(newArray, i, j);

      newArray[i].state = ElementStates.Modified;
      newArray[j].state = ElementStates.Modified;

      setArray([...newArray]);
    }

    setLoader(false);
    setInputValue("");
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
        <Button
          text="Развернуть"
          isLoader={loader}
          type="submit"
          disabled={!!!inputValue}
        />
      </form>
      <ul className={style.symbolList}>
        {array?.map((item) => (
          <Circle key={nanoid()} letter={item.letter} state={item.state} />
        ))}
      </ul>
    </SolutionLayout>
  );
};
