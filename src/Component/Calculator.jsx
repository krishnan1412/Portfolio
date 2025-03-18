import { useEffect, useState } from 'react';
import '../style/Calculator.css';
import { evaluate } from 'mathjs';

export const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [tableData, setTableData] = useState([]);

    const handleClick = (e) => {
        setInput(input + e.target.name);
    };

    const clear = () => {
        setInput("");
        setResult("");
    };

    const handleBack = () => {
        setInput(input.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            if (input === "") {
                setResult("not defined");
                return;
            }
            const evaluatedResult = evaluate(input);
            setResult(evaluatedResult.toString());
            // Save the input and result to table data
            setTableData([...tableData, { value: input, result: evaluatedResult.toString() }]);
        } catch (error) {
            setResult(error);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (/[0-9]/.test(e.key) || /[+\-*/.]/.test(e.key)) {
                setInput((prev) => prev + e.key);
            } else if (e.key === 'Enter') {
                handleCalculate();
            } else if (e.key === 'Backspace') {
                handleBack();
            } else if (e.key === 'Escape' || e.key === 'Delete') {
                clear();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCalculate, handleBack, clear]);

    return (
        <><div className='fullDiv'>
            <div className='calculator'>
                <h1>Calculator</h1>
                <div className="displayValue">
                    {result === '' ? input : result}
                    
                   
                   
                </div>
                <div className="buttons">
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button name="/" onClick={handleClick} className="symbol">/</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button name="*" onClick={handleClick} className="symbol">*</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="+" onClick={handleClick} className="symbol">+</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
                    <button onClick={clear} className='clear'>C</button>
                    <button name="-" onClick={handleClick} className="symbol">-</button>
                    <button onClick={handleCalculate} className="equals">=</button>
                    <button onClick={handleBack} className='backspace'>Back</button>
                </div>
            </div>
            <div className='calculator'>
                <h1>Table</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Values</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.value}</td>
                                <td>{data.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></div>
        </>
    );
};
