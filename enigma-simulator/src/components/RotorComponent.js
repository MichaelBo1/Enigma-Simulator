import React from 'react';
import SelectRotor from './SelectRotor.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


class RotorComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col text-uppercase pt-4 ps-4 clr">
                    <div className="vstack gap-0">
                        <button id={this.props.posID} value="+" className="text-btn" onClick={this.props.stepRotorPos}>+</button>
                        <div className="rotor-display">{this.props.position}</div>
                        <button id={this.props.posID} value="-" className="text-btn" onClick={this.props.stepRotorPos}>-</button>
                    </div>
                </div>

                <div className="col pt-3 clr">
                    {this.props.type}
                    <FontAwesomeIcon icon={faGear} className="fa-3x rotor"/>
                </div>
            </div>
        )
    }
}

export default RotorComponent;