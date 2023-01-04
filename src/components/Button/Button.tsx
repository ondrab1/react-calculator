import './Button.css';

interface ButtonProps {
    label: string;
    value: string|number;
    classes?: string[];
    onClick: (value: string|number) => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            className={props.classes?.join(' ')}
            value={props.value}
            onClick={() => props.onClick(props.value)}>
            {props.label}
        </button>
    );
};

export default Button;