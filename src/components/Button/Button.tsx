import './Button.css';

interface ButtonProps {
    label: string;
    value: string|number;
    classes?: string[];
    onClick: (value: string|number) => void;
}

const Button = (props: ButtonProps) => {
    return (
        <div className="button-container">
            <button
                className={props.classes?.join(' ')}
                value={props.value}
                onClick={() => props.onClick(props.value)}>
                {props.label}
            </button>
        </div>
    );
};

export default Button;