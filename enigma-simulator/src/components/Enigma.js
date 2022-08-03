import React from 'react';
import RotorComponent from './RotorComponent.js';
import GetInput from './GetInput.js';
import RenderInput from './RenderInput.js';
import GetSettings from './GetSettings.js';
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

const revertRotors = (machine, arr) => {
    // shift rotor positions to those passed into as an array
    for (let i = 0; i < 3; i++) {
        machine.rotors[i].setRotor(arr[i])
    }
};

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
    }
    // update this.state.inputVal field as user types.
    handleChange(event) {
        const changedInput = event.target.value;
        // input has been fully deleted - reset everything
        if (changedInput === '') {
            this.setState(
                {
                    prevInput: this.state.inputVal,
                    inputVal: changedInput,
                    outputVal: [],
                    history: this.state.history.slice(0),
                    stepNo: 0
                }
            )
            revertRotors(MACHINE, this.state.history[0].positions)
            return;
        } 
        // check for difference when input field changes
        const newLength = changedInput.length;
        const prevLength = this.state.inputVal.length;
        let updatedHistory;
        let newStepNo;
        let newOutput;

        // new input is >=, so encode only the new letter and add to output value
        if (newLength >= prevLength) {
            let addedInput;
            if (this.state.inputVal === '') {
                addedInput = preProcessChar(changedInput);
            } 
            else {
                addedInput = preProcessChar(changedInput[changedInput.length - 1]);
            }
            // exit if new character is not alphabetical
            if (addedInput === null) {
                return;
            }
            newOutput = this.state.outputVal.concat(MACHINE.encodeChar(addedInput));
            updatedHistory = this.state.history.concat([
                {
                    positions: [MACHINE.rotors[0].rotorPos, MACHINE.rotors[1].rotorPos, MACHINE.rotors[2].rotorPos]
                }
            ]);
            newStepNo = this.state.stepNo + 1;
        }
        // input is smaller, so a char has been deleted and the machine needs to reverse its rotor position
        else {
            let deletedInput = preProcessChar(this.state.prevInput[this.state.prevInput.length - 1]);
            // ignore if not alphabetical
            if (deletedInput === null) {
                return;
            }
            newOutput = this.state.outputVal.slice(0, this.state.outputVal.length - 1);
            updatedHistory = this.state.history.slice(0, this.state.stepNo);
            newStepNo = this.state.stepNo - 1;

            // revert rotor position by passing in the last positions in the history
            revertRotors(MACHINE, updatedHistory[updatedHistory.length - 1].positions);

        }

       
        this.setState({
            prevInput: this.state.inputVal,
            inputVal: changedInput,
            outputVal: newOutput,
            history: updatedHistory,
            stepNo: newStepNo
        });
        
    }
    // update (and re-render) component only if input value has changed
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.inputVal !== this.state.inputVal) {
            return true;
        }
        return false;
    }
    
    
    

    
    render() {
        console.log("history:", this.state.history)
        console.log("input val:", this.state.inputVal)
        console.log("output val:", this.state.outputVal)
        console.log("Curent rotor positions: ", MACHINE.rotors)

        return (
            <div className="container-fluid text-center">
                <h1>Enigma</h1>
                <div className="row">
                    <div className="col">
                        <RotorComponent position={MACHINE.rotors[0].rotorPos}/>
                    </div>
                    <div className="col">
                        <RotorComponent position={MACHINE.rotors[1].rotorPos}/>
                    </div>
                    <div className="col">
                        <RotorComponent position={MACHINE.rotors[2].rotorPos}/>
                    </div>
                </div>
                <div className="row">
                    <GetInput input={this.state.inputVal} handleChange={this.handleChange}/>
                    <GetSettings />
                    <RenderInput input={this.state.outputVal.join('')}/>
                </div>
            </div>
      
        )
    }
}

