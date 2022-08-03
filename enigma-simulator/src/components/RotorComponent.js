import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

class RotorComponent extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.position}
                    {this.props.ring}
                </p>
                <FontAwesomeIcon icon={faGear} className="fa-4x"/>
            </div>
            
           
        )
    }
}

export default RotorComponent;