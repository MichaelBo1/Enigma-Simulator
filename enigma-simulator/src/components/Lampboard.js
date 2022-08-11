import React from "react";
import Lamp from "./Lamp.js";


export default class Lampboard extends React.Component {


    render() {
        return (
            <div>
                <div className="d-flex flex-row justify-content-center">
                    <Lamp val={"lampq"} display={"Q"}/>
                    <Lamp val={"lampw"} display={"W"}/>
                    <Lamp val={"lampe"} display={"E"}/>
                    <Lamp val={"lampr"} display={"R"}/>
                    <Lamp val={"lampt"} display={"T"}/>
                    <Lamp val={"lampz"} display={"Z"}/>
                    <Lamp val={"lampu"} display={"U"}/>
                    <Lamp val={"lampi"} display={"I"}/>
                    <Lamp val={"lampo"} display={"O"}/>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Lamp val={"lampa"} display={"A"}/>
                    <Lamp val={"lamps"} display={"S"}/>
                    <Lamp val={"lampd"} display={"D"}/>
                    <Lamp val={"lampf"} display={"F"}/>
                    <Lamp val={"lampg"} display={"G"}/>
                    <Lamp val={"lamph"} display={"H"}/>
                    <Lamp val={"lampj"} display={"J"}/>
                    <Lamp val={"lampk"} display={"K"}/>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Lamp val={"lampp"} display={"P"}/>
                    <Lamp val={"lampy"} display={"Y"}/>
                    <Lamp val={"lampx"} display={"X"}/>
                    <Lamp val={"lampc"} display={"C"}/>
                    <Lamp val={"lampv"} display={"V"}/>
                    <Lamp val={"lampb"} display={"B"}/>
                    <Lamp val={"lampm"} display={"M"}/>
                    <Lamp val={"lampn"} display={"N"}/>
                    <Lamp val={"lampl"} display={"L"}/>
                </div>

            </div>
        )
    }
}