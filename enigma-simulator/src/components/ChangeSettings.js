import { OverlayTrigger } from "react-bootstrap"
import { Popover } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import React from "react"


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

export default class ChangeSettings extends React.Component {
    render() {
        return (
            <OverlayTrigger trigger="click" placement="left" overlay={rotorPopover} >
                <button className="btn settings">
                    <FontAwesomeIcon icon={faGear} className="fa-1x" />
                </button>
            </OverlayTrigger >
        )
    }
}

