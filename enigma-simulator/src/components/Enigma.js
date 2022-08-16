import React from 'react';
import RotorComponent from './RotorComponent.js';
import GetInput from './GetInput.js';
import RenderInput from './RenderInput.js';
import Keyboard from './Keyboard.js';
import sound from '../assets/typewriter-key.mp3'
import RenderConfig from './RenderConfig.js';
import SettingsPopover from './SettingsPopover.js';
// Logic modules
import Machine from '../logic/Machine.js';
import Plugboard from '../logic/Plugboard.js';
import Reflector from '../logic/Reflector.js';
import { ALPHABET } from '../logic/Rotor.js';
import RenderPlugboard from './RenderPlugboard.js';
import getRotor from '../logic/GetRotors.js';
import getReflector from '../logic/GetReflector.js';
// Define constants and default components

const KEYPRESS = new Audio(sound)
// filter keyboard input for only letters
const isLetterOrBack = (str) => {
    // is of correct length and type
    if (str.length === 1 && typeof (str) === 'string') {
        // matches all letters
        if (RegExp(/^\p{L}/, 'u').test(str) === true) {
            return true
        }
    }
    else if (str === 'Backspace') {
        return true;
    }
    else {
        return false;
    }
}
const preProcessChar = (char) => {
    // accept only letters a-z
    if (isLetterOrBack(char)) {
        return char.toLowerCase();
    }
    else {
        return null;
    }
}

const formatPlugs = (plugs) => {
    let res = []
    for (let i = 0; i < plugs.length; i += 2) {
        res.push(plugs[i].toUpperCase() + plugs[i + 1].toUpperCase())
    }
    return res
}

const colors = ['red', 'green', 'blue', 'goldenrod', 'pink', 'purple', 'orange', 'teal', 'grey', 'brown']
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
            inputVal: [],
            outputVal: [],
            history: [
                {
                    positions: ['a', 'a', 'a']
                }
            ],
            stepNo: 0,
            currentPositions: ['a', 'a', 'a'],
            machine: new Machine([getRotor('I'), getRotor('II'), getRotor('III')], getReflector("B"), new Plugboard({})),
            rotorPositions: ['a', 'a', 'a'],
            ringSettings: [1, 1, 1],
            rotorTypes: ['I', 'II', 'III'],
            reflector: "B",
            plugboard: new Plugboard({}),
            plugCount: 0,
            colorIndex: 0,
            selectedPlugs: [],
            plugStatus: []

        }
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChar = this.handleChar.bind(this);
        this.updateRotor = this.updateRotor.bind(this);
        this.getUpdatedMachine = this.getUpdatedMachine.bind(this);
        this.handleConnect = this.handleConnect.bind(this);
        this.connectPlug = this.connectPlug.bind(this);
        this.resetPlugs = this.resetPlugs.bind(this);
        this.stepRotorPos = this.stepRotorPos.bind(this);
        this.changeRing = this.changeRing.bind(this);
        this.changeReflector = this.changeReflector.bind(this);
        this.handleRotorTypeSelect = this.handleRotorTypeSelect.bind(this);
        this.resetSettings = this.resetSettings.bind(this);


    }

    handleBackspace() {
        if (this.state.inputVal.length <= 0) {
            return;
        }
        let updatedOutput = this.state.outputVal.slice(0);
        let optLen = updatedOutput.length;
        if (updatedOutput[optLen - 1] === ' ') {
            updatedOutput = updatedOutput.slice(0, optLen - 2)
        }
        else {
            updatedOutput = updatedOutput.slice(0, optLen - 1)
        }

        const updatedMachine = this.getUpdatedMachine();
        const updatedHistory = this.state.history.slice(0, this.state.stepNo);
        // otherwise revert rotor position by passing in the last positions in the history
        revertRotors(updatedMachine, updatedHistory[updatedHistory.length - 1].positions)
        this.setState({
            inputVal: this.state.inputVal.slice(0, this.state.inputVal.length - 1),
            outputVal: updatedOutput,
            history: updatedHistory,
            stepNo: this.state.stepNo - 1,
            rotorPositions: [updatedMachine.rotors[0].rotorPos, updatedMachine.rotors[1].rotorPos, updatedMachine.rotors[2].rotorPos],
            machine: updatedMachine
        })
    }
    handleKeyDown(event) {
        // pre proccess char and encrypt if it is a valid letter, null otherwise
        const char = preProcessChar(event.key);
        if (char !== null) {
            if (char === 'backspace') {
                this.handleBackspace();
            }
            else {
                this.handleChar(char)
            }
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }
    // update this.state.inputVal field as user types.
    getUpdatedMachine() {
        let updatedMachine = new Machine(
            [getRotor(this.state.rotorTypes[0]),
            getRotor(this.state.rotorTypes[1]),
            getRotor(this.state.rotorTypes[2])],

            getReflector(this.state.reflector),
            this.state.plugboard
        );
        for (let i = 0; i < 3; i++) {
            updatedMachine.rotors[i].setRotor(this.state.rotorPositions[i]);
            updatedMachine.rotors[i].setRing(this.state.ringSettings[i]);
        }
        return updatedMachine;
    }

    handleChar(char) {
        const updatedMachine = this.getUpdatedMachine();
        const encryptedChar = updatedMachine.encodeChar(char);

        // format output into blocks of 5 letters
        let newOutput = this.state.outputVal.slice(0)
        if ((this.state.stepNo) % 5 === 0 && this.state.stepNo > 0) {
            newOutput.push(' ')
        }


        newOutput.push(encryptedChar)
        KEYPRESS.play();

        // highlight character key press on user keyboard
        const user = document.getElementById('user' + char);
        user.style.border = '4px solid #C3C7C7'
        setTimeout(() => { user.style.border = '' }, 500);


        // light up corresponding ecnrypted char on lampboard;
        const lamp = document.getElementById('lamp' + encryptedChar);
        lamp.style.cssText = 'color: gold; box-shadow: 0 0 3px 3px gold';
        setTimeout(() => { lamp.style.cssText = 'color: white; box-shadow: ""' }, 500);

        this.setState({
            inputVal: this.state.inputVal.concat(char),
            outputVal: newOutput,
            history: this.state.history.concat([
                {
                    positions: [updatedMachine.rotors[0].rotorPos, updatedMachine.rotors[1].rotorPos, updatedMachine.rotors[2].rotorPos]
                }
            ]),
            stepNo: this.state.stepNo + 1,
            machine: updatedMachine,
            rotorPositions: [updatedMachine.rotors[0].rotorPos, updatedMachine.rotors[1].rotorPos, updatedMachine.rotors[2].rotorPos],
            currentLamp: encryptedChar
        })
    }
    updateRotor(event) {
        let newPos = this.state.rotorPositions.slice();
        newPos[event.currentTarget.id] = event.currentTarget.value.toLowerCase();
        this.setState({
            rotorPositions: newPos
        })
    }

    handleConnect(event) {
        event.preventDefault();
        const plugs = this.state.selectedPlugs
        const plugLen = plugs.length;
        // don't connect if a plug is not in a pair
        if (plugLen % 2 !== 0) {
            alert(`Error: The letter ${this.state.selectedPlugs[plugLen - 1]} is not paired up`);
            return;
        }
        // if executed correctly, generate plugboard object
        let updatedPairs = {};
        // jump in 2s as only valid pairs are added
        for (let i = 0; i < plugs.length; i += 2) {
            updatedPairs[plugs[i]] = plugs[i + 1];
            updatedPairs[plugs[i + 1]] = plugs[i];
        }
        // change the state of the plugboard
        this.setState({
            plugboard: new Plugboard(updatedPairs),
            plugStatus: formatPlugs(plugs)
        })
    }
    connectPlug(event) {
        const plug = event.currentTarget;
        let newPlugCnt = this.state.plugCount;
        let newClrIdx = this.state.colorIndex;
        console.log(newPlugCnt)
        // if plug has already been highlighted, remove its color (and paired letter if any)
        if (plug.classList.contains('clicked') === false && newPlugCnt < 20) {
            // switch to a new color if starting a new pair
            if (this.state.plugCount % 2 === 0 && this.state.plugCount !== 0) {
                newClrIdx++;
            }
            plug.classList.add('clicked');
            plug.style.cssText = `color: ${colors[newClrIdx]}; border-color: ${colors[newClrIdx]}`
            newPlugCnt++;

            this.setState({
                plugCount: newPlugCnt,
                colorIndex: newClrIdx,
                selectedPlugs: this.state.selectedPlugs.concat(plug.id)
            });
        }
    }
    resetPlugs() {
        document.querySelectorAll('.plug').forEach((elem) => {
            elem.classList.remove('clicked')
            elem.style.cssText = 'color:""; border: ""';
        })
        this.setState({
            plugCount: 0,
            colorIndex: 0,
            selectedPlugs: [],
            plugStatus: []
        })
    }


    stepRotorPos(event) {
        const updatedPositions = this.state.rotorPositions.slice(0);
        const rotorId = event.currentTarget.id;
        const val = event.currentTarget.value;
        // Get new letter by finding the incremented index and using the ALPHABET constant to get it
        let newLetter;
        // val is either + or -
        if (val === '+') {
            newLetter = ALPHABET[(this.state.rotorPositions[rotorId].charCodeAt() - 97 + 1) % 26];
        }
        else {
            let idx = this.state.rotorPositions[rotorId].charCodeAt() - 97 - 1;
            // only if going from A to Z
            if (idx < 0) {
                idx = 25;
            }
            newLetter = ALPHABET[idx]
        }

        updatedPositions[rotorId] = newLetter;



        this.setState({
            rotorPositions: updatedPositions
        })
    }
    changeRing(event) {
        const ring = event.currentTarget;
        const newSettings = this.state.ringSettings.slice(0);    
        newSettings[ring.id] = ring.value;

        this.setState({
            ringSettings: newSettings
        });
    }

    changeReflector(event) {
        this.setState({
            reflector: event.currentTarget.value
        })
    }

    handleRotorTypeSelect(event) {
        const selector = event.currentTarget;
        let updatedTypes = this.state.rotorTypes.slice(0)
        updatedTypes[selector.id] = selector.value;
        this.setState({
            rotorTypes: updatedTypes
        })

    }

    resetSettings() {
        this.setState({
            rotorPositions: ['a', 'a', 'a'],
            ringSettings: [1, 1, 1],
            rotorTypes: ['I', 'II', 'III'],
            reflector: "B",
        })
        document.body.click()
    }


    render() {
        let rotorsDisabled = false;
        if (this.state.inputVal.length > 0) {
            rotorsDisabled = true;
        }
        return (
            <div id="machine" className="container-fluid text-center">

                <h1 className="clr">Enigma Machine</h1>
                <SettingsPopover 
                rotorType={this.state.rotorTypes} 
                handleRotorTypeSelect={this.handleRotorTypeSelect} 
                changeRing={this.changeRing} updateRotor={this.updateRotor} 
                resetSettings={this.resetSettings}
                ringSettings={this.state.ringSettings}
                rotorsDisabled={rotorsDisabled}
                reflector={this.state.reflector}
                changeReflector={this.changeReflector}/>

                <div className="d-flex flex-row justify-content-center">
                    <div id="rotor-settings" className="d-flex flex-row">
                        <div className='p-2'>
                            <RotorComponent posID={0} position={this.state.rotorPositions[0]} ring={this.state.ringSettings[0]} stepRotorPos={this.stepRotorPos} changeRing={this.changeRing}  type={this.state.rotorTypes[0]}/>
                        </div>
                        <div className='p-2'>
                            <RotorComponent posID={1} position={this.state.rotorPositions[1]} ring={this.state.ringSettings[1]} stepRotorPos={this.stepRotorPos} changeRing={this.changeRing} type={this.state.rotorTypes[1]}/>
                        </div>
                        <div className='p-2'>
                            <RotorComponent posID={2} position={this.state.rotorPositions[2]} ring={this.state.ringSettings[2]} stepRotorPos={this.stepRotorPos} changeRing={this.changeRing} type={this.state.rotorTypes[2]}/>
                        </div>
                    </div>

                </div>
                <div className="d-flex flex-row justify-content-center pb-2">
                    <RenderConfig 
                    rotorTypes={this.state.rotorTypes} 
                    rings={this.state.ringSettings} 
                    displayPlugs={this.state.plugStatus.join('-')}
                    rotorPos={this.state.rotorPositions}
                    reflector={this.state.reflector} />
                </div>
                <div className="row">
                    <Keyboard val="lamp" />
                    <Keyboard val="user" />
                    <RenderPlugboard handleConnect={this.handleConnect} resetPlugs={this.resetPlugs} connectPlug={this.connectPlug} />
                </div>
                <div className="row">
                    <GetInput input={this.state.inputVal.join('')} handleChar={this.handleChar} />
                    <RenderInput input={this.state.outputVal.join('')} />
                </div>
            </div>

        )
    }
}

