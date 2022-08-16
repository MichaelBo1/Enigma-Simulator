import React from 'react';

export default class GetInput extends React.Component {
    render() {
        return (
            <div className="col clr">
                <label htmlFor="userInput" className="form-label">Plaintext</label>
                <textarea 
                    value={this.props.input}
                    onChange={this.props.handleChange}
                    className="form-control mb-2"
                    id="userInput"
                    rows="12"
                    readOnly>{this.props.input}</textarea>
            </div>
        )
    }
}