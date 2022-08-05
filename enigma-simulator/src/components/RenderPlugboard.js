import React from "react";
import Letter from "./Letter.js";

export default class RenderPlugboard extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <Letter letter={"Q"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"W"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"E"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"R"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"T"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"Z"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"U"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"I"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"O"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Letter letter={"A"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"S"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"D"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"F"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"G"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"H"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"J"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                        <Letter letter={"K"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Letter letter={"P"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter letter={"Y"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter letter={"X"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter letter={"C"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter letter={"V"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter letter={"B"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter letter={"M"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter letter={"N"} connectPlug={this.props.connectPlug}/>
                    </div>
                    <div className="col">
                    <Letter letter={"L"} connectPlug={this.props.connectPlug}/>
                    </div>
                </div>
            </div>
        ) 
    }
}