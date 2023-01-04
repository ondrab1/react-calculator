import './Display.css';

interface DisplayProps {
    value: string;
}

const Display = (props: DisplayProps) => {
    return (
        <input className="display" type="text" readOnly={true} value={props.value} />
    );
};

export default Display;