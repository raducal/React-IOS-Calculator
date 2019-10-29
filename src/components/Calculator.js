import React from "react";
import Button from "./Button";

export default function Calculator({ handleBtnClick }) {
  return (
    <div className="calc">
      <Button
        cln="calc-number one"
        vals={{ one: "CLR", two: "%", three: "÷" }}
        values={{ one: "clear", two: "percent", three: "divide" }}
        handleBtnClick={handleBtnClick}
      />
      <Button
        cln="calc-number"
        vals={{ one: "7", two: "8", three: "9", four: "x" }}
        values={{ one: "7", two: "8", three: "9", four: "mul" }}
        handleBtnClick={handleBtnClick}
      />
      <Button
        cln="calc-number"
        vals={{ one: "4", two: "5", three: "6", four: "-" }}
        values={{ one: "4", two: "5", three: "6", four: "minus" }}
        handleBtnClick={handleBtnClick}
      />
      <Button
        cln="calc-number"
        vals={{ one: "1", two: "2", three: "3", four: "+" }}
        values={{ one: "1", two: "2", three: "3", four: "plus" }}
        handleBtnClick={handleBtnClick}
      />
      <Button
        cln="calc-number one"
        vals={{ one: "0", two: ".", three: "=" }}
        values={{ one: "0", two: "dot", three: "equals" }}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
}
