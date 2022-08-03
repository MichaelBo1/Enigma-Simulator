import React from 'react';
import RenderRotorList from './RenderRotorList.js';

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
                            <td><input type="text" pattern="/[1-26]/" maxLength="2" name="ring-l"></input></td>
                            <td><input type="text" pattern="/[1-26]/" maxLength="2" name="ring-m"></input></td>
                            <td><input type="text" pattern="/[1-26]/" maxLength="2" name="ring-r"></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
            
        )
    }
}