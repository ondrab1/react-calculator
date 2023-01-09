import Button from "../Button/Button";
import React from "react";

interface KeyboardProps {
    handler: (value: string|number) => void;
}

const Keyboard = ({ handler }: KeyboardProps) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Button label="C" value="c" onClick={(value) => handler(value)}/>
                </div>
                <div className="col">
                    <Button label="%" value="%" onClick={(value) => handler(value)}/>
                </div>
                <div className="col">
                    <Button label="/" value="/" onClick={(value) => handler(value)}/>
                </div>
                <div className="col">
                    <Button label="*" value="*" onClick={(value) => handler(value)}/>
                </div>
            </div>
        </div>
    );
};

export default Keyboard;