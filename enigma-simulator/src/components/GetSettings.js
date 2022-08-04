import React from 'react';
import RenderRotorList from './RenderRotorList.js';
import RenderRingSettings from './RenderRingSettings.js';

export default class GetSettings extends React.Component {
    render() {
        return (
            <div className="col">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan='4'> Settings </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Rotors</th>
                            <td><RenderRotorList idPos={0} updateRotor={this.props.updateRotor}/></td>
                            <td><RenderRotorList idPos={1} updateRotor={this.props.updateRotor}/></td>
                            <td><RenderRotorList idPos={2} updateRotor={this.props.updateRotor}/></td>
                        </tr>
                        <tr>
                            <th>Rings</th>
                            <td><RenderRingSettings /></td>
                            <td><RenderRingSettings /></td>
                            <td><RenderRingSettings /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
            
        )
    }
}