import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

export default function ConfigurePlugboard() {
    const [open, setOpen] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    <form onSubmit={handleSubmit}>
                        Connect up to 10 pairs
                        <table>
                            <tbody>
                                <tr>
                                    <td><input type="text" size="2" maxLength="2" className="pair noEnterSubmit"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
          
                </div>
            </Collapse>
        </div>
    )


}