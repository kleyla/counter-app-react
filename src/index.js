import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import "./index.css";
// import PrimeraApp from "./PrimeraApp";

ReactDOM.render(<CounterApp value={10} />, document.getElementById("root"));
