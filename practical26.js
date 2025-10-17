// Create a new React app:

// 1 . npx create-react-app calculator-app
// cd calculator-app
// npm start


//2 . Create a Calculator.js component.

import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input value={input} readOnly />
      {"1234567890+-*/".split("").map(c => <button onClick={()=>setInput(input+c)}>{c}</button>)}
      <button onClick={()=>setInput(eval(input))}>=</button>
      <button onClick={()=>setInput("")}>C</button>
    </div>
  );
};
export default Calculator;
