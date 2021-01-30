import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    // console.log(e);
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  const handleSubstrac = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstrac}>-1</button>
    </>
  );
};

CounterApp.protoTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
