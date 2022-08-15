import React from "react";


export default class Key extends React.Component {
    render() {
        return (
            <button id={this.props.val} className={`${this.props.cls} mx-1`}>{this.props.display}</button>
        )
    }
} 