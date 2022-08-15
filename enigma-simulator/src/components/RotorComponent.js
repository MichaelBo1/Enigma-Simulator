import React from 'react';
import { OverlayTrigger } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import SettingsPopover from './SettingsPopover.js';

class RotorComponent extends React.Component {
    render() {
        const popover = SettingsPopover();
        return (
            <div className="row">
                <div className="col text-uppercase fw-bold pt-3 ps-4">
                    <div className="vstack gap-0">
                        <button id={this.props.posID} value="+" className="text-btn" onClick={this.props.changeRotor}>+</button>
                        {this.props.position}
                        <button id={this.props.posID} value="-" className="text-btn" onClick={this.props.changeRotor}>-</button>
                    </div>
                </div>
                <div className="col fw-bold pt-3 px-1">
                    <div className="vstack gap-0">
                        <button id={this.props.posID} value="+" className="text-btn" onClick={this.props.changeRing}>+</button>
                        {this.props.ring}
                        <button id={this.props.posID} value="-" className="text-btn" onClick={this.props.changeRing}>-</button>
                    </div>
                </div>
                <div className="col pt-0">
                    <div className="fw-bold text-muted">
                        {this.props.rotorType}
                    </div>
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement={this.props.placement}
                        overlay={popover}>
                        <button 
                        className={`btn text-btn ${this.props.status}`} 
                        id={this.props.status}>
                            <FontAwesomeIcon icon={faGear} className="fa-4x" />
                        </button>
                    </OverlayTrigger>
                </div>
            </div>
        )
    }
}

export default RotorComponent;