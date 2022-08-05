import React from "react";
import Letter from "./Letter.js";

export default class RenderPlugboard extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <Letter idLetter={"Q"} letter={"Q"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"W"} letter={"W"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"E"} letter={"E"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"R"} letter={"R"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"T"} letter={"T"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"Z"} letter={"Z"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"U"} letter={"U"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"I"} letter={"I"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"O"} letter={"O"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Letter idLetter={"A"} letter={"A"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"S"} letter={"S"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"D"} letter={"D"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"F"} letter={"F"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"G"} letter={"G"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"H"} letter={"H"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"J"} letter={"J"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter idLetter={"K"} letter={"K"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Letter idLetter={"P"} letter={"P"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"Y"} letter={"Y"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"X"} letter={"X"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"C"} letter={"C"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"V"} letter={"V"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"B"} letter={"B"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"M"} letter={"M"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"N"} letter={"N"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter idLetter={"L"} letter={"L"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
            </div>
        ) 
    }
}