import { useState } from "react";
import { Navbar } from "./navbar";

const Counter = () => {
    // console.log(useState(0));
    let [counter, setCounter] = useState(10);
    let [name, setName] = useState("RAM");

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const decreaseCounter = () => {
        setCounter(counter - 1);
    };

    const changeName = () => {
        setName(name == "HARI" ? "RAM" : "HARI");
    };

    let array1 = [1, 2, 3, 4, 5];

    return (
        <div>
            {name}
            <br />
            <button onClick={changeName}> CHANGE</button>
            Prev COUNTER : {counter - 1}
            Counter: {counter}
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
            NEXT COUNTER : {counter + 1}
            {array1.map((item) => {
                let variable1 = item * 100;

                return <li>{variable1}</li>;
            })}
            <Navbar counter={counter} />
        </div>
    );
};

export default Counter;
