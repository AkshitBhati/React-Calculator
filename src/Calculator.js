import React, { useState } from "react";
import './App.css'

const Calculator = () => {
    
    const [result, setResult] = useState('')

    const handelClick = (e) => {
        setResult(result.concat(e.target.name))
    }
    const clear = () => {
        setResult('')
    }
    const deleteScreen = () => {
        setResult(result.slice(0, -1))
    }
    const calculate = () => {
        try {

            setResult(eval(result).toString())
        }
        catch(err){
            setResult("Syntax Error")
        }
    }
    return (
        <>
        <div className="container">
            <form >
                <input type="text" className="current-operand output" value={result}  />
            </form>
            <div className="buttons">
                <button  className="ac span-two" onClick={clear} >AC</button>
                <button  onClick={deleteScreen}>Del</button>
                <button name="/" onClick={handelClick}>&divide;</button>
                <button name="7" onClick={handelClick}>7</button>
                <button name="8" onClick={handelClick}>8</button>
                <button name="9" onClick={handelClick}>9</button>
                <button name="*" onClick={handelClick} >&times;</button>
                <button name="4" onClick={handelClick}>4</button>
                <button name="5" onClick={handelClick}>5</button>
                <button name="6" onClick={handelClick}>6</button>
                <button name="-" onClick={handelClick}>-</button>
                <button name="1" onClick={handelClick}>1</button>
                <button name="2" onClick={handelClick}>2</button>
                <button name="3"onClick={handelClick}>3</button>
                <button name="0" onClick={handelClick}>0</button>
                <button name="."onClick={handelClick}>.</button>
                <button  className="span-two" onClick={calculate}>=</button>

            </div>
        </div>
        </>
    )
}

export default Calculator