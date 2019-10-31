import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

let number = "";
function App() {
  const [calcValue, setCalcvalue] = useState("0");

  const handleBtnClick = e => {
    switch (e.target.value) {
      case "clear":
        number = "";
        break;
      case "0":
        number += "0";
        break;
      case "1":
        number += "1";
        break;
      case "2":
        number += "2";
        break;
      case "3":
        number += "3";
        break;
      case "4":
        number += "4";
        break;
      case "5":
        number += "5";
        break;
      case "6":
        number += "6";
        break;
      case "7":
        number += "7";
        break;
      case "8":
        number += "8";
        break;
      case "9":
        number += "9";
        break;
      case "divide":
        number += "/";
        break;
      case "mul":
        number += "*";
        break;
      case "plus":
        number += "+";
        break;
      case "minus":
        number += "-";
        break;
      case "percent":
        number += "%";
        break;
      case "dot":
        number += ".";
        break;
      case "delete":
        number = number.slice(0, -1);
        break;
      case "equals":
        try {
          number = eval(number);
          if (number % 1 !== 0) {
            number = number.toFixed(3);
          } else {
            number = number.toFixed(0);
          }
        } catch (error) {
          console.log("error");
          number = "";
        }
        break;

      default:
        number = "";
    }

    setCalcvalue(number);
  };

  return (
    <React.Fragment>
      <div className="body-container">
        <div className="calc-container">
          <div>
            <div className="calc-screen">{calcValue}</div>
            <Calculator handleBtnClick={handleBtnClick} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
