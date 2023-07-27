import React from 'react'
import { useState } from 'react';
import './App.css'
import * as math from 'mathjs'

const App = () => {

    const [result, setResult] = useState("");

    const handleClick = (e) => {
        const input = e.target.name;
      
        if (input === "=") {
          calculateResult();
        } else {
          // Handle operators
          if (input === "+" || input === "-" || input === "*" || input === "/") {
            setResult(result + " " + input + " ");
          } else {
            // Handle numbers and decimal point
            setResult(result + input);
          }
        }
      };
      
    const clear = () =>{
        setResult("");
    }

    const backspace = () =>{
        setResult(result.slice());
    }

    const addToText = (val) =>{
        setResult((result) => result + val);
    }

  

    const calculateResult = () => {

        try {
            const calculatedResult = math.evaluate(result);
            setResult(calculatedResult.toString());
          } catch (error) {
            setResult("Error");
          }
        
      };
      

  return (
    <div className="container">
        <form>
            <input type= "text" value= {result}></input>
        </form>

        <div className='keypad'>
            <button className= "highlight" onClick={clear} id="clear">Clear</button>
            <button className= "highlight" onClick={backspace} id="backspace">C</button>
            <button className= "highlight" name = "/" onClick={() => addToText("/")}>&divide;</button>
            <button name = "7" onClick={handleClick}>7</button>
            <button name = "8" onClick={handleClick}>8</button>
            <button name = "9" onClick={handleClick}>9</button>
            <button className="highlight" name="*" onClick={() => addToText("*")}>*</button>
            <button name = "4" onClick={handleClick}>4</button>
            <button name = "5" onClick={handleClick}>5</button>
            <button name = "6" onClick={handleClick}>6</button>
            <button className= "highlight" name = "-" onClick={() => addToText("-")}>-</button>
            <button name = "1" onClick={handleClick}>1</button>
            <button name = "2" onClick={handleClick}>2</button>
            <button name = "3" onClick={handleClick}>3</button>
            <button className="highlight" name="+" onClick={() => addToText("+")}>+</button>

            <button name = "0" onClick={handleClick}>0</button>
            <button className= "highlight" name = "." onClick={handleClick}>.</button>
            <button className="highlight" onClick={calculateResult} id="result">=</button>

        </div>
    </div>
  );
}

export default App
