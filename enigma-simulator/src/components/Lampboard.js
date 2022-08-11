import React from "react";
import Lamp from "./Lamp.js";


export default class Lampboard extends React.Component {

    render() {
        return (
            <div>
                <div className="d-flex flex-row justify-content-center">
                    <Lamp val={"q"} />
                    <Lamp val={"w"} />
                    <Lamp val={"e"} />
                    <Lamp val={"r"} />
                    <Lamp val={"t"} />
                    <Lamp val={"z"} />
                    <Lamp val={"u"} />
                    <Lamp val={"i"} />
                    <Lamp val={"o"} />
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Lamp val={"a"} />
                    <Lamp val={"s"} />
                    <Lamp val={"d"} />
                    <Lamp val={"f"} />
                    <Lamp val={"g"} />
                    <Lamp val={"h"} />
                    <Lamp val={"j"} />
                    <Lamp val={"k"} />
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Lamp val={"p"} />
                    <Lamp val={"y"} />
                    <Lamp val={"x"} />
                    <Lamp val={"c"} />
                    <Lamp val={"v"} />
                    <Lamp val={"b"} />
                    <Lamp val={"m"} />
                    <Lamp val={"n"} />
                    <Lamp val={"l"} />
                </div>

            </div>
        )
    }
}