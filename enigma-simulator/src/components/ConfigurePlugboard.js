import React from 'react';
import { Collapse } from 'react-bootstrap';

export default class ConfigurePlugboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.setOpen = this.setOpen.bind(this);
    
    }
    setOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return (
            <div>
                <button 
                className="btn" 
                onClick={this.setOpen}
                aria-controls="configure-plugboard"
                aria-expanded={this.state.open}>Configure</button>
                <Collapse in={this.state.open}>
                    <div id="configure-plugboard">
                        <form>
                            Connect up to 10 pairs
                            <table>
                                <tbody>
                                    <tr>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                        <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                    </tr>
                                    <tr>
                                        <td align="center" colSpan="10">
                                            <button type="submit" className="btn"  onClick={this.props.handleConnect}>Connect</button>
                                            <button className="btn" onClick={this.props.handleReset}>Reset</button>
                                        </td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </form>
              
                    </div>
                </Collapse>
            </div>
        )
    }
}