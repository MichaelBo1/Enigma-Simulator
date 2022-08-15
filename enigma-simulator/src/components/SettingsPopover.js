import { Popover } from "react-bootstrap"

export default function SettingsPopover(props) {
    return (
        <Popover className="bg-dark" id="rotor-popover">
            <Popover.Header as="h4" className="bg-dark text-light text-center border-bottom border-white">Rotor Selection</Popover.Header>
            <Popover.Body>
                <table className="text-light">
                    <tbody>
                        <tr>
                            <th>Reflector</th>
                            <td>
                                <select
                                    id="reflector"
                                    className="bg-dark text-light text-center">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="Beta">Beta</option>
                                    <option value="Gamma">Gamma</option>
                                </select>
                            </td>
                            <th>1st Rotor</th>
                            <td>
                                <select
                                    id="rotor0"
                                    className="bg-dark text-light text-center"
                                    >
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                    <option value="V">V</option>
                                </select>
                            </td>
                            <th>2nd Rotor</th>
                            <td>
                                <select id="rotor1" className="bg-dark text-light text-center">
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                    <option value="V">V</option>
                                </select>
                            </td>
                            <th>3rd Rotor</th>
                            <td>
                                <select id="rotor2" className="bg-dark text-light text-center">
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
                <div className="text-center pt-3">
                    <button className="text-btn apply">Apply Selection</button>
                </div>
            </Popover.Body>
        </Popover>
    )
}