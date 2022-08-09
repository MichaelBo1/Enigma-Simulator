import React from "react";
import Letter from "./Letter.js";
import ConfigurePlugboard from "./ConfigurePlugboard.js";

export default class RenderPlugboard extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <Letter idLetter={"q"} letter={"Q"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"w"} letter={"W"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"e"} letter={"E"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"r"} letter={"R"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"t"} letter={"T"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"z"} letter={"Z"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"u"} letter={"U"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"i"} letter={"I"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"o"} letter={"O"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Letter idLetter={"a"} letter={"A"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"s"} letter={"S"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"d"} letter={"D"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"f"} letter={"F"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"g"} letter={"G"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"h"} letter={"H"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"j"} letter={"J"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"k"} letter={"K"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Letter idLetter={"p"} letter={"P"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"y"} letter={"Y"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"x"} letter={"X"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"c"} letter={"C"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"v"} letter={"V"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"b"} letter={"B"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"m"} letter={"M"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"n"} letter={"N"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"l"} letter={"L"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
                <div className="row">
                    <ConfigurePlugboard handleConnect={this.props.handleConnect} handleReset={this.props.handleReset}/>                  
                </div>
            </div>
        ) 
    }
}