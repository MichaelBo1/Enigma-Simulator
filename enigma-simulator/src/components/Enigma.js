import React from 'react';
import RotorComponent from './RotorComponent.js';
import GetInput from './GetInput.js';
import RenderInput from './RenderInput.js';
// Logic modules
import Machine from '../logic/Machine.js';
import Plugboard from '../logic/Plugboard.js';
import Reflector from '../logic/Reflector.js';
import Rotor from '../logic/Rotor.js';

// Define constants and default components
const rotorI = new Rotor(['e','k','m','f','l','g','d','q','v','z','n','t','o','w','y','h','x','u','s','p','a','i','b','r','c','j'], 'a', 1, 'q');
const rotorII = new Rotor(['a', 'j', 'd', 'k', 's', 'i', 'r', 'u', 'x', 'b', 'l', 'h', 'w', 't', 'm', 'c', 'q', 'g', 'z', 'n', 'p', 'y', 'f', 'v', 'o', 'e'], 'a', 1, 'e');
const rotorIII = new Rotor(['b', 'd', 'f', 'h', 'j', 'l', 'c', 'p', 'r', 't', 'x', 'v', 'z', 'n', 'y', 'e', 'i', 'w', 'g', 'a', 'k', 'm', 'u', 's', 'q', 'o'], 'a', 1, 'v');
const reflectorB = new Reflector({'a': 'y', 'b': 'r', 'c': 'u', 'd': 'h', 'e': 'q', 'f': 's','g': 'l','h': 'd','i': 'p','j': 'x','k': 'n','l': 'g','m': 'o','n': 'k','o': 'm',
'p': 'i', 'q': 'e', 'r': 'b', 's': 'f', 't': 'z', 'u': 'c', 'v': 'w','w': 'v'
, 'x': 'j','y': 's', 'z': 't'})

const preProcessChar = (char) => {
    // accept only letters a-z
    if (char.length === 1 && char.match(/[a-z]/i)) {
        return char.toLowerCase();
    }
    else {
        return null;
    }
}
// default settings
const MACHINE = new Machine([rotorI, rotorII, rotorIII], reflectorB, new Plugboard({}));

const reverseRotors = (machine) => {
    // check if current rotor position is different from previous, in which case step it backwards and adjust the offset accordingly
    for (let rotor of machine.rotors) {
        if (rotor.rotorPos !== rotor.prevPos) {
            // does not work for multiple deletes in a row...
            rotor.rotorPos = rotor.prevPos
        }
    }

}

export default class Enigma extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: '',
            prevInput: '',
            outputVal: [],
            history: [
                {
                    positions: [MACHINE.rotors[0].rotorPos, MACHINE.rotors[1].rotorPos, MACHINE.rotors[2].rotorPos]
                }
            ],
            stepNo: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewInput = this.handleNewInput.bind(this);
    }
    // update this.state.inputVal field as user types.
    handleChange(event) {
        // record previous input before updating 
        this.setState({
            prevInput: this.state.inputVal,
            inputVal: event.target.value
        });
    }

    handleNewInput() {
        const curLength = this.state.inputVal.length;
        const prevLength = this.state.prevInput.length;
        

        // input is greater, so encode only the new letter and add to output value
        if (curLength > prevLength) {
   
            let addedInput = preProcessChar(this.state.inputVal[this.state.inputVal.length - 1]);
            // exit if new character is not alphabetical
            if (addedInput === null) {
                return;
            }
            // otherwise add the encoded character to the output
            this.setState({
                outputVal: this.state.outputVal.push(MACHINE.encodeChar(addedInput)),
                history: this.state.history.concat([
                    {
                        positions: [MACHINE.rotors[0].rotorPos, MACHINE.rotors[1].rotorPos, MACHINE.rotors[2].rotorPos]
                    }
                ]),
                stepNo: this.stepNo++
            })

        }
        // input is smaller, so a char has been deleted and the machine needs to reverse its rotor position
        else if (curLength < prevLength) {
            let deletedInput = preProcessChar(this.state.prevInput[this.state.prevInput.length - 1]);
            // ignore if not alphabetical
            if (deletedInput === null) {
                return;
            }

            this.setState({
                outputVal: this.state.outputVal.pop()
            })
            // TODO: reverse rotor positions (keep a record?)

        }
        
    }
    // update (and re-render) component only if input value has changed
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.inputVal !== this.state.inputVal) {
            return true;
        }
        return false;
    }

    
    

    
    render() {
        return (
            <div className="container-fluid this.state.inputVal-center">
                <h1>Enigma</h1>
                <div className="row">
                    <div className="col">
                        <RotorComponent />
                    </div>
                    <div className="col">
                        <RotorComponent />
                    </div>
                    <div className="col">
                        <RotorComponent />
                    </div>
                </div>
                <div className="row">
                    <GetInput input={this.state.inputVal} handleChange={this.handleChange}/>
                    <RenderInput input={this.state.outputVal}/>
                </div>
            </div>
      
        )
    }
}

