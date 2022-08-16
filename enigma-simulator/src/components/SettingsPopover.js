import React from "react";
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
                                            <SelectRotor posID={0} onChange={this.props.handleRotorSelect} startType={this.props.rotorType} />
                                        </td>
                                        <td>
                                            <SelectRotor posID={1} onChange={this.props.handleRotorSelect} startType={this.props.rotorType} />
                                        </td>
                                        <td>
                                            <SelectRotor posID={2} onChange={this.props.handleRotorSelect} startType={this.props.rotorType} />
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
                                        <td><RenderRotorList idPos={0} onChange={this.props.updateRotor} /></td>
                                        <td><RenderRotorList idPos={1} onChange={this.props.updateRotor} /></td>
                                        <td><RenderRotorList idPos={2} onChange={this.props.updateRotor} /></td>
                                    </tr>
                                </thead>
                            </table>
                        </Popover.Body>
                    </Popover>
                }
            >
                <button className="btn text-light">Popover</button>
            </OverlayTrigger>
        )
    }
}