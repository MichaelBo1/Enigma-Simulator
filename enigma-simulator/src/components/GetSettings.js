import React from 'react';
import RenderPlugboard from './RenderPlugboard.js';


export default class GetSettings extends React.Component {
    render() {
        return (
            <div className="col">
                <table className="table">
                    <thead>
                        <tr>
                            <th colspan="4"> Plugboard </th>
                        </tr>
                    </thead>
                </table>
                <RenderPlugboard handleConnect={this.props.handleConnect} handleReset={this.props.handleReset} connectPlug={this.props.connectPlug}/>
            </div>
    
            
        )
    }
}