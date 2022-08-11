import React from "react";


export default class Lamp extends React.Component {
    render() {
        return (
            <button id={this.props.val} className="btn text-btn">{this.props.val.toUpperCase()}</button>
        )
    }
}