import React from 'react';
import { OverlayTrigger } from "react-bootstrap"
import { Popover } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const rotorPopover = (
    <Popover id="rotor-popover">
        <Popover.Header as="h4">Rotor Settings</Popover.Header>
        <Popover.Body>
            <table>
                <tbody>
                    <tr>
                        <th>Reflector</th>
                        <td>
                            <select id="reflector">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="Beta">Beta</option>
                                <option value="Gamma">Gamma</option>
                            </select>
                        </td>
                        <th>1st Rotor</th>
                        <td>
                            <select id="rotor0">
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                            </select>
                        </td>
                        <th>2nd Rotor</th>
                        <td>
                            <select id="rotor1">
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                            </select>
                        </td>
                        <th>3rd Rotor</th>
                        <td>
                            <select id="rotor2">
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Popover.Body>
    </Popover>
)

class RotorComponent extends React.Component {
    render() {
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
                <div className="col pt-3">
                    <OverlayTrigger 
                    trigger="click"
                    rootClose 
                    placement={this.props.placement} 
                    overlay={rotorPopover} >
                        <button className="btn settings">
                            <FontAwesomeIcon icon={faGear} className="fa-4x" />
                        </button>
                    </OverlayTrigger>
                </div>
            </div>
        )
    }
}

export default RotorComponent;