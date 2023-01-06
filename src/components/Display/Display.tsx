import './Display.css';

interface DisplayProps {
    history: string;
    value: string;
}

const Display = (props: DisplayProps) => {
    return (
        <div className="display-container">
            <input className="history-display" type="text" readOnly={true} value={props.history} />
            <input className="display" type="text" readOnly={true} value={props.value} />
        </div>
    );
};

export default Display;