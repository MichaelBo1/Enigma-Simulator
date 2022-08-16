import React from "react"
import Key from "./Key.js"

export default class Keyboard extends React.Component {
    render() {
        return (
            <div className="no-pointer mb-3">
                <div className="d-flex flex-row justify-content-center">
                    <Key val={this.props.val + "q"} display={"Q"} cls={this.props.val}/>
                    <Key val={this.props.val + "w"} display={"W"} cls={this.props.val}/>
                    <Key val={this.props.val + "e"} display={"E"} cls={this.props.val}/>
                    <Key val={this.props.val + "r"} display={"R"} cls={this.props.val}/>
                    <Key val={this.props.val + "t"} display={"T"} cls={this.props.val}/>
                    <Key val={this.props.val + "z"} display={"Z"} cls={this.props.val}/>
                    <Key val={this.props.val + "u"} display={"U"} cls={this.props.val}/>
                    <Key val={this.props.val + "i"} display={"I"} cls={this.props.val}/>
                    <Key val={this.props.val + "o"} display={"O"} cls={this.props.val}/>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Key val={this.props.val + "a"} display={"A"} cls={this.props.val}/>
                    <Key val={this.props.val + "s"} display={"S"} cls={this.props.val}/>
                    <Key val={this.props.val + "d"} display={"D"} cls={this.props.val}/>
                    <Key val={this.props.val + "f"} display={"F"} cls={this.props.val}/>
                    <Key val={this.props.val + "g"} display={"G"} cls={this.props.val}/>
                    <Key val={this.props.val + "h"} display={"H"} cls={this.props.val}/>
                    <Key val={this.props.val + "j"} display={"J"} cls={this.props.val}/>
                    <Key val={this.props.val + "k"} display={"K"} cls={this.props.val}/>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Key val={this.props.val + "p"} display={"P"} cls={this.props.val}/>
                    <Key val={this.props.val + "y"} display={"Y"} cls={this.props.val}/>
                    <Key val={this.props.val + "x"} display={"X"} cls={this.props.val}/>
                    <Key val={this.props.val + "c"} display={"C"} cls={this.props.val}/>
                    <Key val={this.props.val + "v"} display={"V"} cls={this.props.val}/>
                    <Key val={this.props.val + "b"} display={"B"} cls={this.props.val}/>
                    <Key val={this.props.val + "m"} display={"M"} cls={this.props.val}/>
                    <Key val={this.props.val + "n"} display={"N"} cls={this.props.val}/>
                    <Key val={this.props.val + "l"} display={"L"} cls={this.props.val}/>
                </div>
            </div>
        )
    }

}