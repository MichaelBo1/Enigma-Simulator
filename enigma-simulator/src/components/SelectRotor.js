import React from "react";

export default class SelectRotor extends React.Component {
    render() {
        return (
            <div>
                {
                    {
                        'I': (
                            <select className="rotor-select" id={0} onChange={this.props.handleRotorSelect} defaultValue='I'>
                                <option value={'I'}>I</option>
                                <option value={'II'}>II</option>
                                <option value={'III'}>III</option>
                                <option value={'IV'}>IV</option>
                                <option value={'V'}>V</option>
                             </select>),
                        'II': (
                              <select className="rotor-select" id={1} onChange={this.props.handleRotorSelect} defaultValue='II'>
                                <option value={'I'}>I</option>
                                <option value={'II'}>II</option>
                                <option value={'III'}>III</option>
                                <option value={'IV'}>IV</option>
                                <option value={'V'}>V</option>
                              </select>),
                        'III': (
                              <select className="rotor-select" id={2} onChange={this.props.handleRotorSelect} defaultValue='III'>
                                <option value={'I'}>I</option>
                                <option value={'II'}>II</option>
                                <option value={'III'}>III</option>
                                <option value={'IV'}>IV</option>
                                <option value={'V'}>V</option>
                             </select>
                        )
                    }[this.props.startType]
                }
            </div>
        )
    }
}
