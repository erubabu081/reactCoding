import React, { useState } from "react";

const CounterApp = ({ onChange }) => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
    onChange((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCounter((prevCount) => prevCount - 1);
    onChange((prevCount) => prevCount - 11);
  };
  return (
    <>
      <p>Counter Value: {counter}</p>
      <button name="increment" onClick={handleIncrement}>
        +
      </button>
      <button name="decrement" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};

export default CounterApp;
