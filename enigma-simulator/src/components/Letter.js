import React from "react";

export default class Letter extends React.Component {
    render() {
        return (
            <div className="plug" onClick={this.props.connectPlug}> {this.props.letter}
            </div>
        )
    }
} 