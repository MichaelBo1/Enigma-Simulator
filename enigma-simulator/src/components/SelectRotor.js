import React from "react";

export default class SelectRotor extends React.Component {
    render() {
        return (
            <div>
                <select id={this.props.posID} onChange={this.props.handleRotorTypeSelect} defaultValue={this.props.startType}>
                    <option value={'I'}>I</option>
                    <option value={'II'}>II</option>
                    <option value={'III'}>III</option>
                    <option value={'IV'}>IV</option>
                    <option value={'V'}>V</option>
                </select>
            </div>

        )
    }
}
