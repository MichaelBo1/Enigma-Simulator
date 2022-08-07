import React from 'react';
import RenderPlugboard from './RenderPlugboard.js';
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
                            <td><RenderRingSettings idPos={0} updateRings={this.props.updateRings}/></td>
                            <td><RenderRingSettings idPos={1} updateRings={this.props.updateRings}/></td>
                            <td><RenderRingSettings idPos={2} updateRings={this.props.updateRings}/></td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                        <tr>
                            <th colspan="4"> Plugboard </th>
                        </tr>
                    </thead>
                </table>
                <RenderPlugboard connectPlug={this.props.connectPlug}/>
            </div>
    
            
        )
    }
}