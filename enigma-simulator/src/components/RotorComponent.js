import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


class RotorComponent extends React.Component {
    
    render() {
        return (
            <div className="row">
                <div className="col text-uppercase fw-bold pt-3 ps-4">
                    <div className="vstack gap-0">
                        <button id={this.props.posID} className="text-btn" onClick={this.props.incRotor}>+</button>
                        {this.props.position}
                        <button id={this.props.posID} className="text-btn">-</button>
                    </div>
                    
                </div>
                <div className="col fw-bold pt-3 px-1">
                    <div className="vstack gap-0">
                        <button id={this.props.posID} className="text-btn">+</button>
                        {this.props.ring}
                        <button id={this.props.posID} className="text-btn">-</button>
                    </div>
                </div>
                <div className="col pt-3">
                    <FontAwesomeIcon icon={faGear} className="fa-4x"/>
                </div>
            </div>
            
           
        )
    }
}

export default RotorComponent;