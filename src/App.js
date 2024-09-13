import { useState } from "react";
import "./App.css";
import Button from "./components/button";

import Counter from "./components/counter";
import Display from "./components/display";
import Portfolio from "./components/portfolio";
import Container from "./components/container";

function App() {
    let [result, setResult] = useState("");

    const addFunc = (op) => {
        setResult(result + op);
    };

    const deleteFunc = () => {
        setResult("");
    };

    const evaluateFunc = () => {
        setResult(eval(result));
    };

    return (
        <div className="wrapper">
            <div className="wrapper">
                <Container />
            </div>
        </div>
    );
}

export default App;
