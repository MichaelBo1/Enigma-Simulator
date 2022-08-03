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
                            <td><RenderRotorList /></td>
                            <td><RenderRotorList /></td>
                            <td><RenderRotorList /></td>
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