import React from 'react';
import RenderPlugboard from './RenderPlugboard.js';


export default class GetSettings extends React.Component {
    render() {
        return (
            <div className="col">
                <RenderPlugboard handleConnect={this.props.handleConnect} handleReset={this.props.handleReset} connectPlug={this.props.connectPlug}/>
            </div>
    
            
        )
    }
}