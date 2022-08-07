import React from "react";

export default class Letter extends React.Component {
    render() {
        return (
            <div id={this.props.idLetter} className="plug"> {this.props.letter}
            </div>
        )
    }
} 