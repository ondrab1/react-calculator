import './FormulaDisplay.css';

interface FormulaDisplayProps {
    value: string;
}

const FormulaDisplay = (props: FormulaDisplayProps) => {
    return (
        <input className="formula-display" type="text" readOnly={true} value={props.value} />
    );
};

export default FormulaDisplay;