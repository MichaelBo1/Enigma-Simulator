import React from "react";

export default class ImportKey extends React.Component {
    render() {
        return (
            <button 
            id={this.props.val} 
            value={this.props.display.toLowerCase()}
            className={`${this.props.cls} key`} 
            onClick={this.props.handleInput}>{this.props.display}</button>
        )
    }
} 