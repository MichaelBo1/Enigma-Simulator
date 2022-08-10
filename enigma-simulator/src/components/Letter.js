import React from "react";

export default class Letter extends React.Component {
    render() {
        return (
            <button id={this.props.idLetter} className="plug" onClick={this.props.connectPlug}> {this.props.letter}
            </button>
        )
    }
} 