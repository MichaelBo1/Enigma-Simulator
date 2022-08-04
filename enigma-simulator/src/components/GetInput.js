import React from 'react';

export default class GetInput extends React.Component {
    render() {
        return (
            <div className="col">
                <label htmlFor="userInput" className="form-label"></label>
                <textarea 
                    value={this.props.input}
                    onChange={this.props.handleChange}
                    className="form-control"
                    id="userInput"
                    rows="12"></textarea>

            </div>
        )
    }
}