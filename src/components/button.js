const Button = (props) => {
    const operator = props.operator;
    const opFunction = props.calculatorFunc;
    const btnClass = props.btnClass;

    // opFunction => addToDisplay

    // opFunction("%") => addToDisplay("%")

    return (
        <div className={btnClass} onClick={() => opFunction(operator)}>
            {operator}
        </div>
    );
};

export default Button;
