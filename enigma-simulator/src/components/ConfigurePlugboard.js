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
                                            <button className="btn">Reset</button>
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
    /*
    handleReset = (event) => {
        event.preventDefault();
        document.querySelectorAll('.pair').forEach((elem) => {
            elem.value = null;
        })
    }
    /*
    /*
    const handleClick = (event) => {
        event.preventDefault();
        const pairs = document.querySelectorAll('.pair')
        // use count to identify input box that has errored (if any)
        let count = 0
        let letters = [];
        pairs.forEach((elem) => {
            const val = elem.value;
            // exit if only a single letter has been given in an input field
            if (val.length === 1) {
                alert(`error: a pair cannot be made from a single letter. Field ${count + 1}`);
                return;
            } 
            // if value is defined, it must be a pair (maxlength is 2), so check for duplicates and previously used letters
            else if (val) {
                const first = val[0].toLowerCase();
                const second = val[1].toLowerCase();
                // if letters are duplicated in field, remove the value and do nothing else
                if (first === second) {
                    elem.value = null;
                }
                // then check if letter has been used in another pair or not
                else if (letters.includes(first) || letters.includes(second)) {
                    alert(`error: duplicate letter used in multiple pairs. Field ${count}`);
                    return;
                }
                // otherwise add letters to array to later "connect" in plugboard
                else {
                    letters.push(first, second)
                }
            }
            count++;
        })
        // if executed correctly, generate plugboard object
        let plugBoard = {};
        // jump in 2s as only valid pairs are added in letters
        for (let i = 0; i < letters.length; i += 2) {
            plugBoard[letters[i]] = letters[i+1];
            plugBoard[letters[i+1]] = letters[i];
        }
    }*/
    


}