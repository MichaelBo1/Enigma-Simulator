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
                                            <SelectRotor posID={0} handleRotorSelect={this.props.handleRotorSelect} startType={this.props.rotorType[0]} />
                                        </td>
                                        <td>
                                            <SelectRotor posID={1} handleRotorSelect={this.props.handleRotorSelect} startType={this.props.rotorType[1]} />
                                        </td>
                                        <td>
                                            <SelectRotor posID={2} handleRotorSelect={this.props.handleRotorSelect} startType={this.props.rotorType[2]} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ring Setting</th>
                                        <td><RenderRingSettings idPos={0} updatedRings={this.props.updatedRings} /></td>
                                        <td><RenderRingSettings idPos={1} updatedRings={this.props.updatedRings} /></td>
                                        <td><RenderRingSettings idPos={2} updatedRings={this.props.updatedRings} /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Starting Position</th>
                                        <td><RenderRotorList idPos={0} updateRotor={this.props.updateRotor} /></td>
                                        <td><RenderRotorList idPos={1} updateRotor={this.props.updateRotor} /></td>
                                        <td><RenderRotorList idPos={2} updateRotor={this.props.updateRotor} /></td>
                                    </tr>
                                </thead>
                            </table>
                            <div className="d-flex flex-row justify-content-center text-dark">
                                <button id="reset" className="btn fw-bold">Reset</button>
                                <button id="close" className="btn fw-bold">X</button>
                            </div>
                        </Popover.Body>
                    </Popover>
                }
            >
                <button className="text-btn pb-0 mb-0"><FontAwesomeIcon id="settings-gear" icon={faGear} className="fa-1x" /></button>
            </OverlayTrigger>
        )
    }
}