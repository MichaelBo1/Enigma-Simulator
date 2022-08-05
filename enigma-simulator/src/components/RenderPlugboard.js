import React from "react";
import Letter from "./Letter.js";

export default class RenderPlugboard extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <Letter letter={"Q"} />
                    </div>
                    <div className="col">
                        <Letter letter={"W"} />
                    </div>
                    <div className="col">
                        <Letter letter={"E"} />
                    </div>
                    <div className="col">
                        <Letter letter={"R"} />
                    </div>
                    <div className="col">
                        <Letter letter={"T"} />
                    </div>
                    <div className="col">
                        <Letter letter={"Z"} />
                    </div>
                    <div className="col">
                        <Letter letter={"U"} />
                    </div>
                    <div className="col">
                        <Letter letter={"I"} />
                    </div>
                    <div className="col">
                        <Letter letter={"O"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Letter letter={"A"} />
                    </div>
                    <div className="col">
                        <Letter letter={"S"} />
                    </div>
                    <div className="col">
                        <Letter letter={"D"} />
                    </div>
                    <div className="col">
                        <Letter letter={"F"} />
                    </div>
                    <div className="col">
                        <Letter letter={"G"} />
                    </div>
                    <div className="col">
                        <Letter letter={"H"} />
                    </div>
                    <div className="col">
                        <Letter letter={"J"} />
                    </div>
                    <div className="col">
                        <Letter letter={"K"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Letter letter={"P"} />
                    </div>
                    <div className="col">
                    <Letter letter={"Y"} />
                    </div>
                    <div className="col">
                    <Letter letter={"X"} />
                    </div>
                    <div className="col">
                    <Letter letter={"C"} />
                    </div>
                    <div className="col">
                    <Letter letter={"V"} />
                    </div>
                    <div className="col">
                    <Letter letter={"B"} />
                    </div>
                    <div className="col">
                    <Letter letter={"M"} />
                    </div>
                    <div className="col">
                    <Letter letter={"N"} />
                    </div>
                    <div className="col">
                    <Letter letter={"L"} />
                    </div>
                </div>
            </div>
        ) 
    }
}