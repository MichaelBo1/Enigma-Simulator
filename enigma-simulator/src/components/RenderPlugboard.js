import React from "react";
import ConfigurePlugboard from "./ConfigurePlugboard.js";

export default class RenderPlugboard extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <ConfigurePlugboard handleConnect={this.props.handleConnect} handleReset={this.props.handleReset} connectPlug={this.props.connectPlug}/>                  
                </div>
            </div>
        ) 
    }
}