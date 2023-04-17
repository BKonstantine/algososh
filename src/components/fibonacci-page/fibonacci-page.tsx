import { ChangeEvent, FC, FormEvent, useState } from "react";
import style from "./fibonacci-page.module.css";
import { nanoid } from "nanoid";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { Circle } from "../ui/circle/circle";
import { fib } from "./utils";
import { setDelay } from "../../utils/set-delay";
import { SHORT_DELAY_IN_MS } from "../../constants/delays";

export const FibonacciPage: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [array, setArray] = useState<Array<number>>();  

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    const data = fib(Number(inputValue));
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      await setDelay(SHORT_DELAY_IN_MS);
      setArray(data.slice(0, i + 1));
    }    
    setLoader(false);    
  };

  return (
    <SolutionLayout title="Последовательность Фибоначчи" extraClass="pb-50">
      <form className={style.form} onSubmit={onSubmit}>
        <Input
          type="number"
          max={19}
          min={1}
          isLimitText
          onChange={onChange}
          value={inputValue}
        />
        <Button
          text="Рассчитать"
          isLoader={loader}
          type="submit"
          disabled={!!!inputValue}
        />
      </form>
      <ul className={style.symbolList}>
        {array?.map((item, index) => {
          return <Circle letter={String(item)} index={index} key={nanoid()} />;
        })}
      </ul>
    </SolutionLayout>
  );
};
