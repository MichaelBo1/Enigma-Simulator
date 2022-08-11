import React from "react";
import ConfigurePlugboard from "./ConfigurePlugboard.js";

export default class RenderPlugboard extends React.Component {
    render() {
        return (
            <div className="col">
                <ConfigurePlugboard handleConnect={this.props.handleConnect} resetPlugs={this.props.resetPlugs} connectPlug={this.props.connectPlug}/>                  
            </div>
        ) 
    }
}