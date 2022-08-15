import React from "react";


export default class RenderConfig extends React.Component {
    render() {
        return (
            <div>
                <div className="hstack gap-1 fw-bold">
                    <div>Rotors:</div>
                    <div></div>
                    <div>{this.props.rotorTypes[0]}</div>
                    <div>{this.props.rotorTypes[1]}</div>
                    <div>{this.props.rotorTypes[2]}</div>
                    <div>Plugboard: {this.props.displayPlugs}</div>
                </div>
            </div>
        )
    }
}