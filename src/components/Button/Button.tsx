import './Button.css';

interface ButtonProps {
    label: string;
    value: string|number;
    classes?: string[];
    onClick: (value: string|number) => void;
}

const Button = (props: ButtonProps) => {
    const handleButtonClick = (e: any, value: string|number) => {
        e.target.blur();
        props.onClick(value);
    }

    return (
        <div className="button-container">
            <button
                className={props.classes?.join(' ')}
                value={props.value}
                onClick={(e) => handleButtonClick(e, props.value)}>
                {props.label}
            </button>
        </div>
    );
};

export default Button;