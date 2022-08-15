import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


class RotorComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col text-uppercase fw-bold pt-4 ps-4">
                    <div className="vstack gap-0">
                        <button id={this.props.posID} value="+" className="text-btn" onClick={this.props.changeRotor}>+</button>
                        {this.props.position}
                        <button id={this.props.posID} value="-" className="text-btn" onClick={this.props.changeRotor}>-</button>
                    </div>
                </div>
                <div className="col fw-bold pt-4 px-1">
                    <div className="vstack gap-0">
                        <button id={this.props.posID} value="+" className="text-btn" onClick={this.props.changeRing}>+</button>
                        {this.props.ring}
                        <button id={this.props.posID} value="-" className="text-btn" onClick={this.props.changeRing}>-</button>
                    </div>
                </div>
                <div className="col pt-0">
                    <div className="fw-bold text-muted pb-2">
                        <select className="rotor-select">
                            <option value={'I'}>I</option>
                            <option value={'II'}>II</option>
                            <option value={'III'}>III</option>
                            <option value={'IV'}>IV</option>
                            <option value={'V'}>V</option>
                        </select>

                    </div>
                    <FontAwesomeIcon icon={faGear} className="fa-4x" />
                </div>
            </div>
        )
    }
}

export default RotorComponent;