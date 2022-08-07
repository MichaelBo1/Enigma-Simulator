import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

export default function ConfigurePlugboard() {
    const [open, setOpen] = useState(false)

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

                    </form>
          
                </div>
            </Collapse>
        </div>
    )


}