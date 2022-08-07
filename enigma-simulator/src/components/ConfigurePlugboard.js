import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

export default function ConfigurePlugboard() {
    const [open, setOpen] = useState(false)

    
    const handleClick = (event) => {
        event.preventDefault();
        console.log("connecting pairs...")
    }
    return (
        <div>
            <button 
            className="btn" 
            onClick={() => setOpen(!open)}
            aria-controls="configure-plugboard"
            aria-expanded={open}>Configure</button>
            <Collapse in={open}>
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
                                        <button type="submit" className="btn"  onClick={handleClick}>Connect</button>
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