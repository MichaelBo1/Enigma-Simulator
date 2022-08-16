import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from 'react-bootstrap';
import RenderRingSettings from "./RenderRingSettings.js";
import RenderRotorList from "./RenderRotorList.js";
import SelectRotor from "./SelectRotor.js";




export default class SettingsPopover extends React.Component {
    render() {
        return (
            <OverlayTrigger
                trigger="click"
                placement="bottom"
                rootClose
                overlay={
                    <Popover id="settings-popover">
                        <Popover.Header as="h4">
                            Configuration Settings
                        </Popover.Header>
                        <Popover.Body>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Plugboard</th>
                                        <th scope="col">Left Rotor</th>
                                        <th scope="col">Middle Rotor</th>
                                        <th scope="col">Right Rotor</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rotor Type</th>
                                        <td>
                                            <SelectRotor posID={0} handleRotorTypeSelect={this.props.handleRotorTypeSelect} startType={this.props.rotorType[0]} rotorsDisabled={this.props.rotorsDisabled}/>
                                        </td>
                                        <td>
                                            <SelectRotor posID={1} handleRotorTypeSelect={this.props.handleRotorTypeSelect} startType={this.props.rotorType[1]} rotorsDisabled={this.props.rotorsDisabled}/>
                                        </td>
                                        <td>
                                            <SelectRotor posID={2} handleRotorTypeSelect={this.props.handleRotorTypeSelect} startType={this.props.rotorType[2]} rotorsDisabled={this.props.rotorsDisabled}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ring Setting</th>
                                        <td><RenderRingSettings idPos={0} changeRing={this.props.changeRing} defVal={this.props.ringSettings[0]}/></td>
                                        <td><RenderRingSettings idPos={1} changeRing={this.props.changeRing} defVal={this.props.ringSettings[1]}/></td>
                                        <td><RenderRingSettings idPos={2} changeRing={this.props.changeRing} defVal={this.props.ringSettings[2]}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Starting Position</th>
                                        <td><RenderRotorList idPos={0} updateRotor={this.props.updateRotor} rotorsDisabled={this.props.rotorsDisabled}/></td>
                                        <td><RenderRotorList idPos={1} updateRotor={this.props.updateRotor} rotorsDisabled={this.props.rotorsDisabled}/></td>
                                        <td><RenderRotorList idPos={2} updateRotor={this.props.updateRotor} rotorsDisabled={this.props.rotorsDisabled}/></td>
                                    </tr>
                                </thead>
                            </table>
                            <div className="d-flex flex-row justify-content-center text-dark">
                                <button id="reset" className="btn fw-bold" onClick={this.props.resetSettings}>Reset</button>
                                <button 
                                id="close" 
                                className="btn fw-bold" 
                                onClick={() => {
                                    document.body.click();
                                }}>Close</button>
                            </div>
                            <div className="fw-bold">Note: rotors can only be changed when starting a new message</div>
                        </Popover.Body>
                    </Popover>
                }
            >
                <button className="text-btn pb-0 mb-0"><FontAwesomeIcon id="settings-gear" icon={faGear} className="fa-1x" /></button>
            </OverlayTrigger>
        )
    }
}