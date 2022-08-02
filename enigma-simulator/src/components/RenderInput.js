import React from 'react';

export default class RenderInput extends React.Component {
    render() {
        return (
            <div className="col-6">
                <label htmlFor="renderInput" className="form-label"></label>
                <textarea 
                    value={this.props.input}
                    className="form-control"
                    type="text" 
                    id="renderInput"
                    readOnly></textarea>
            </div>
        )
    }
}