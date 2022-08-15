import React from "react";

export default class Lamp extends React.Component {
    render() {
        return (
            <button id={this.props.val} className="lamp">{this.props.display}</button>
        )
    }
}