import React from 'react';
import { Collapse } from 'react-bootstrap';
import Letter from './Letter.js';

export default class ConfigurePlugboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.setOpen = this.setOpen.bind(this);

    }
    setOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return (
            <div>
                <button
                    className="btn text-btn"
                    onClick={this.setOpen}
                    aria-controls="configure-plugboard"
                    aria-expanded={this.state.open}>Plugboard</button>
                <Collapse in={this.state.open}>
                    <div className="pt-3" id="configure-plugboard">
                        <strong>Connect up to 10 pairs</strong>
                        <div className="d-flex flew-row justify-content-center">
                            <Letter idLetter={"q"} letter={"Q"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"w"} letter={"W"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"e"} letter={"E"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"r"} letter={"R"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"t"} letter={"T"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"z"} letter={"Z"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"u"} letter={"U"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"i"} letter={"I"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"o"} letter={"O"} connectPlug={this.props.connectPlug} />
                        </div>
                        <div className="d-flex flew-row justify-content-center">
                            <Letter idLetter={"a"} letter={"A"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"s"} letter={"S"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"d"} letter={"D"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"f"} letter={"F"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"g"} letter={"G"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"h"} letter={"H"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"j"} letter={"J"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"k"} letter={"K"} connectPlug={this.props.connectPlug} />
                        </div>
                        <div className="d-flex flew-row justify-content-center">
                            <Letter idLetter={"p"} letter={"P"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"y"} letter={"Y"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"x"} letter={"X"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"c"} letter={"C"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"v"} letter={"V"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"b"} letter={"B"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"m"} letter={"M"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"n"} letter={"N"} connectPlug={this.props.connectPlug} />
                            <Letter idLetter={"l"} letter={"L"} connectPlug={this.props.connectPlug} />
                        </div>
                        <div className="container text-center">
                            <button type="submit" className="btn" onClick={this.props.handleConnect}>Connect</button>
                            <button className="btn" onClick={this.props.resetPlugs}>Reset</button>
                        </div>
                    </div>
                </Collapse >
            </div >
        )
    }
}