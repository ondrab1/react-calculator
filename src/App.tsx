import React, {useEffect, useState} from 'react';
import './App.css';
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

const operators = ['+', '-', '*', '/'];

function App() {
    const [formula, setFormula] = useState<string[]>([]);
    const [display, setDisplay] = useState<string>('');

    useEffect(() => {
        // listen for keydown from keyboard
        window.addEventListener('keydown', handleUserKeyPress);

        // cleanup
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    })

    // Handling of user input from keyboard
    const handleUserKeyPress = (e: KeyboardEvent) => {
        if (e.repeat) {
            return;
        }

        handleAction(!isNaN(parseInt(e.key)) ? parseInt(e.key) : e.key)
    }

    // Method that renders formula
    const renderFormula = () => {
        const formulaClone = [...formula];

        const last = formulaClone.at(-1);
        // remove operator at the end of the formula
        if (last && operators.includes(last)) {
            if (display) {
                // display is not empty, so display current value on display next to operator
                formulaClone.push(display);
            } else {
                // display is empty, so do not display empty operator at the end of formula
                formulaClone.pop();
            }
        }

        return formulaClone.join(' ');
    }

    // Returns result of formula using eval() method
    const getResult = () => {
        const result = eval(renderFormula());

        return result.toString();
    }

    // Handle calculator actions
    const handleAction = (value: string|number) => {
        // Number button was pressed
        if (typeof value === 'number' || value === '.') {
            setDisplay(display + value.toString());
            return;
        }

        // Operator button was pressed
        if (operators.includes(value)) {
            // Save display value
            formula.push(display);
            // Save operator that should be used
            formula.push(value);
            // Update react state - set formula
            setFormula(formula);
            // Update react state - reset display
            setDisplay('');
            return;
        }

        switch (value) {
            // Reset display and formula memory
            case 'c':
                setDisplay('');
                setFormula([]);
                break;
            case '=':
            case 'Enter':
                // Save display value
                formula.push(display);
                // display result at display
                setDisplay(getResult());
                // reset formula memory
                setFormula([]);
                break;
        }
    };

    return (
        <div className="app">

            <div className="app-title">
                React calculator
            </div>

            <div className="container">
                <div className="calculator">
                    {/* Input, History & Result display */}
                    <Display value={display} history={renderFormula()} />
                    {/* Buttons */}
                    <div className="keys">
                        <Button label="C" value="c" onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="%" value="%" onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="/" value="/" onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="*" value="*" onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="7" value={7} onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="8" value={8} onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="9" value={9} onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="-" value="-" onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="4" value={4} onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="5" value={5} onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="6" value={6} onClick={(value) => handleAction(value)} />
                    </div>
                    <div className="keys">
                        <Button label="+" value="+" onClick={(value) => handleAction(value)} />
                    </div>
                    <section id="anomaly-keys-wrapper">
                        <section>
                            <div className="keys">
                                <Button label="1" value={1} onClick={(value) => handleAction(value)} />
                            </div>
                            <div className="keys">
                                <Button label="2" value={2} onClick={(value) => handleAction(value)} />
                            </div>
                            <div className="keys">
                                <Button label="3" value={3} onClick={(value) => handleAction(value)} />
                            </div>
                            <div className="keys long">
                                <Button label="0" value={0} onClick={(value) => handleAction(value)} />
                            </div>
                            <div className="keys">
                                <Button label="." value="." onClick={(value) => handleAction(value)} />
                            </div>
                        </section>
                        <section>
                            <div className="keys tall">
                                <Button label="=" value="=" onClick={(value) => handleAction(value)} />
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
