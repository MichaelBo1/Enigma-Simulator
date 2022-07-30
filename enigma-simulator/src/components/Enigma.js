import React from 'react';
import RotorComponent from './RotorComponent.js';
import GetInput from './GetInput.js';
import RenderInput from './RenderInput.js';

export default class Enigma extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    // update text field as user types.
    handleChange(event) {
        this.setState({
            inputVal: event.target.value
        });
    }

    render() {
        return (
            <div className="container-fluid text-center">
                <h1>Enigma</h1>
                <div className="row">
                    <div className="col">
                        <RotorComponent />
                    </div>
                    <div className="col">
                        <RotorComponent />
                    </div>
                    <div className="col">
                        <RotorComponent />
                    </div>
                </div>
                <div className="row">
                    <GetInput input={this.state.inputVal} handleChange={this.handleChange}/>
                    <RenderInput input={this.state.inputVal}/>
                </div>
            </div>
      
        )
    }
}

