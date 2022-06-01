import React, {useState} from "react";

function FunctionalComponent() {
    const [count, setCount] = useState(0); // This forces state
    // const counter = (isIncrementing) => {
    //     (isIncrementing) ? setCount(count + 1) : setCount(count - 1);
    // }
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = (msg = null) => {
        // (!!msg) ? console.log(msg) : console.log('');
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Welcome to the Functional Component</h1>
            <p>The count is: {count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default FunctionalComponent;
