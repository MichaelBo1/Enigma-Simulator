import React from "react";

export default class Letter extends React.Component {
    render() {
        return (
            <div className="plug"> {this.props.letter}
            </div>
        )
    }
} 