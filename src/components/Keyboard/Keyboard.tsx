import Button from "../Button/Button";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

interface KeyboardProps {
    handler: (value: string|number) => void;
}

const Keyboard = ({ handler }: KeyboardProps) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col padding-0">
                    <Button label="C" value="c" onClick={(value) => handler(value)}/>
                </div>
                <div className="col padding-0">
                    <Button label="" value="" onClick={(value) => handler(value)}/>
                </div>
                <div className="col padding-0">
                    <Button label="%" value="%" onClick={(value) => handler(value)}/>
                </div>
                <div className="col padding-0">
                    <Button label="/" value="/" onClick={(value) => handler(value)}/>
                </div>
            </div>
            <div className="row">
                <div className="col padding-0">
                    <Button label="7" value={7} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="8" value={8} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="9" value={9} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="*" value="*" onClick={(value) => handler(value)} />
                </div>
            </div>
            <div className="row">
                <div className="col padding-0">
                    <Button label="4" value={4} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="5" value={5} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="6" value={6} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="+" value="+" onClick={(value) => handler(value)} />
                </div>
            </div>
            <div className="row">
                <div className="col padding-0">
                    <Button label="1" value={1} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="2" value={2} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="3" value={3} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="-" value="-" onClick={(value) => handler(value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-6 padding-0">
                    <Button label="0" value={0} onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button label="." value="." onClick={(value) => handler(value)} />
                </div>
                <div className="col padding-0">
                    <Button classes={['color-blue']} label="=" value="=" onClick={(value) => handler(value)} />
                </div>
            </div>
        </div>
    );
};

export default Keyboard;