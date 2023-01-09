import React, {useEffect, useState} from 'react';
import './App.css';
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";

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

    const getFormulaLastItem = () => {
        return formula.at(-1);
    }

    // Method that renders formula
    const renderFormula = () => {
        const formulaClone = [...formula];

        const last = getFormulaLastItem();
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

        // Operator button was pressed - and formula is not empty or "-" operator was pressed, cuz "-" is able to be at the beginning of the formula
        if (operators.includes(value)) {
            // Save display value if any exists
            if (display) {
                formula.push(parseFloat(display).toString());
            }

            const last = getFormulaLastItem();
            // Last item in formula is operator, so we want to change it to another operator
            if (last && operators.includes(last)) {
                // Remove current operator and replace it by pressed operator below
                formula.pop();
            }

            // Save operator that should be used - operator should be saved only if there is some number in formula
            if (formula.length) {
                formula.push(value);
            }
            // Update react state - set formula
            setFormula(formula);
            // Update react state - reset display
            setDisplay('');
            return;
        }

        switch (value) {
            // Reset display and formula memory
            case 'c':
            case 'Delete':
                setDisplay('');
                setFormula([]);
                break;
            // +/- conversion    
            case '+/-':
                setDisplay((parseFloat(display) * -1).toString());
                break;
            // convert to percentages
            case '%':
                setDisplay((parseFloat(display) / 100).toString());
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

            <div className="calculator-outer-container">
                <div className="calculator">
                    {/* Input, History & Result display */}
                    <Display value={display} history={renderFormula()} />
                    {/* Calculator keyboard */}
                    <Keyboard handler={handleAction} />
                </div>
            </div>
        </div>
    );
}

export default App;
