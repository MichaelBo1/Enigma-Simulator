const ALPHABET = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// rotates array, shifting elements left n times
const rotateArray = (arr, n) => arr.concat(arr).slice(n, n + arr.length);

export default class Rotor {
    constructor(wiring, rotorPos='a', ringSetting=1, steppingPoint) {
        // Array of characters substituted by index: ["b", "d"...]
        this.wiring = wiring;
        this.rotorPos = rotorPos;
        this.ringSetting = ringSetting
        this.steppingPoint = steppingPoint;
        // adjusts entry and exit points. changes with configuration
        this.offset = 0;
        // record previous rotor position to backstep if input is deleted
        this.prevPos = '';
    }

    // signals if stepping point has been reached, in which case the left rotor (if this rotor is middle or right) must also be stepped
    atSteppingPoint() {
        if (this.rotorPos === this.steppingPoint) {
            return true;
        }
        else {
            return false;
        }
    }
    // computes entry or exit offset depending on val (1: entry, -1: exit)
    offsetIndex(char, val) {
        if (val === 1) {
            return (char.charCodeAt() - 97 + this.offset) % 26;
        }
        else if (val === -1) {
            return char.charCodeAt() - 97 - this.offset;
        }
        return;
    }

    // adjust offset by 1 (loops round with modulus 26) and "increase" the character in the rotor position
    step() {
        this.offset = (this.offset + 1) % 26;
        this.prevPos = this.rotorPos;
        this.rotorPos = String.fromCharCode(97 + this.offset);
    }
    // adjusts offset and rotor position depending on user defined setting. Position is given as a lowercase character
    setRotor(position) {
        this.offset = position.charCodeAt() - 97;
        this.prevPos = this.rotorPos;
        this.rotorPos = position;
    }   

    // assumes that the new ring setting is different from the current (which is handled when processing user input)
    setRing(setting) {
        // find the dot position ('a' by default) in wiring before shifting
        let dotPos = this.wiring.indexOf('a');

        let diff = setting - 1;
        // update wiring table by shifting based on the new ring setting (relative to a: 1)
        
        this.wiring = this.wiring.map(char => {
            let newCharIndex = (char.charCodeAt() - 97 + diff) % 26;
            return ALPHABET[newCharIndex];
            });

            
        dotPos = (dotPos + diff) % 26;
        // find position of ring setting character (e.g. 1:'a') and its distance from the dot position to then shift it
        let ringIndex = this.wiring.indexOf(String.fromCharCode(setting + 96));
        let rotateBy =  ringIndex - dotPos

        // > 0, to the right of dot position, so just left shift. < 0, need to 'move right' by left shifting. != 0 as this be be for a ring setting of 01 (default reset)
        if (rotateBy < 0) {
            this.wiring = rotateArray(this.wiring, this.wiring.length + rotateBy)

        }
        else {
            this.wiring = rotateArray(this.wiring, rotateBy);
        }
    }
    // char assumed to be pre-processed to lowercase
    forwardPass(char) {
        // Account for entry offset (subtract ASCII value to set in index range)
        let charIndex = this.offsetIndex(char, 1);      
        // perform substitution by checking index against ALPHABET
        char = this.wiring[charIndex];
        
        // exit offset
        let exitIndex = this.offsetIndex(char, -1);
        // < 0: adjust negative index
        if (exitIndex < 0) {
            exitIndex += 26; // length of ALPHABET;
        }
        return ALPHABET[exitIndex];
    }

    reversePass(char) {
        // entry offset (is string to then do reverse substitution from wiring)
        let asciiVal = char.charCodeAt() + this.offset;
        // standardize value if out of alphabetical range (97-122)
        if (asciiVal > 122) {
            asciiVal = (asciiVal % 123) + 97;
        }
        char = String.fromCharCode(asciiVal);
        // find index of target character to swap in ALPHABET   
        let charIndex = this.wiring.indexOf(char);
        char = ALPHABET[charIndex];

        // exit offset
        let exitIndex = this.offsetIndex(char, -1);
        // < 0: adjust negative index
        if (exitIndex < 0) {
            exitIndex += 26; // length of ALPHABET;
        }
        return ALPHABET[exitIndex];

    }



    
}







