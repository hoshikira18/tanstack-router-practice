import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import Button from "./Button";

type ChildrenProps = {
    children: ReactNode;
};

type Context = {
    count: number;
    increase: () => void;
    decrease: () => void;
};

// step1: create context
const CounterContext = createContext<Context>({
    count: 0,
    increase: () => {},
    decrease: () => {},
});

// step2: create parent component
const Counter = ({ children }: ChildrenProps) => {
    const [count, setCount] = useState(0);
    const increase = () => setCount((pre) => pre + 1);
    const decrease = () => setCount((pre) => pre - 1);

    return (
        <CounterContext.Provider
            value={{
                count,
                increase,
                decrease,
            }}
        >
            <div className="space-x-4">{children}</div>
        </CounterContext.Provider>
    );
};

// step3: create child component
const Count = () => {
    const { count } = useContext<Context>(CounterContext);
    return <span>{count}</span>;
};

const Label = ({ children }: ChildrenProps) => {
    return <span>{children}</span>;
};

const Increase = ({ children: icon }: ChildrenProps) => {
    const { increase } = useContext(CounterContext);
    return (
        <Button type="button" onClick={increase}>
            {icon}
        </Button>
    );
};

const Decrease = ({ children: icon }: ChildrenProps) => {
    const { decrease } = useContext(CounterContext);
    return (
        <Button type="button" onClick={decrease}>
            {icon}
        </Button>
    );
};

// step4: add child components
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
