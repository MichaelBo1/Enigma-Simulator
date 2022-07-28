const ALPHABET = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// rotates array, shifting elements left n times
const rotateArray = (arr, n) => arr.concat(arr).slice(n, n + arr.length);

class Rotor {
    constructor(wiring, rotorPos='a', ringSetting=1, steppingPoint) {
        // Array of characters substituted by index: ["b", "d"...]
        this.wiring = wiring;
        this.rotorPos = rotorPos;
        this.ringSetting = ringSetting
        this.steppingPoint = steppingPoint;
        // adjusts entry and exit points. changes with configuration
        this.offset = 0;
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
        this.rotorPos = String.fromCharCode(97 + this.offset);
        console.log("Offset:", this.offset, "Rotor at position:", this.rotorPos);
    }
    // adjusts offset and rotor position depending on user defined setting. Position is given as a lowercase character
    setRotor(position) {
        console.log("Setting rotor to position: ", position);
        this.offset = position.charCodeAt() - 97;
        this.rotorPos = position;
        console.log("offset is now: ", this.offset, "and rotor position is: ", this.rotorPos);
    }   

    // assumes that the new ring setting is different from the current (which is handle when processing user input)
    setRing(setting) {
        // find the dot position ('a' by default) in wiring before shifting
        console.log("Current Wiring: ", this.wiring)
        let dotPos = this.wiring.indexOf('a');
        console.log("dot position of a is:", dotPos)

        let diff = setting - 1;
        // update wiring table by shifting based on the new ring setting (relative to a: 1)
        
        this.wiring = this.wiring.map(char => {
            let newCharIndex = (char.charCodeAt() - 97 + diff) % 26;
            return ALPHABET[newCharIndex];
            });

        console.log("Wiring shifted by", diff, "resulting in: ", this.wiring);
            
        dotPos = (dotPos + diff) % 26;
        // find position of ring setting character (e.g. 1:'a') and its distance from the dot position to then shift it
        console.log("dot position after shift is now: ", dotPos)
        let ringIndex = this.wiring.indexOf(String.fromCharCode(setting + 96));
        console.log("the index of the target char is:", ringIndex)
        let rotateBy =  ringIndex - dotPos

        console.log("distance of target char from 'a' is ", rotateBy)
        // > 0, to the right of dot position, so just left shift. < 0, need to 'move right' by left shifting. != 0 as this be be for a ring setting of 01 (default reset)
        if (rotateBy < 0) {
            console.log("rotating wiring...")
            this.wiring = rotateArray(this.wiring, this.wiring.length + rotateBy)

        }
        else {
            this.wiring = rotateArray(this.wiring, rotateBy);
        }
        console.log("Wiring after rotation: ", this.wiring);
    }
    // char assumed to be pre-processed to lowercase
    forwardPass(char) {
        // Account for entry offset (subtract ASCII value to set in index range)
        let charIndex = this.offsetIndex(char, 1);      
        console.log("character index:", charIndex, "resulting in:", ALPHABET[charIndex])
        // perform substitution by checking index against ALPHABET
        char = this.wiring[charIndex];
        
        // adjust for exit offset and return value
        char = ALPHABET[this.offsetIndex(char, -1)];
        return char;
    }

    reversePass(char) {
        // entry offset (is string to then do reverse substitution from wiring)
        char = String.fromCharCode(char.charCodeAt() + this.offset);
        // find index of target character to swap in ALPHABET   
        let charIndex = this.wiring.indexOf(char);
        char = ALPHABET[charIndex];

        // exit offset
        return ALPHABET[this.offsetIndex(char, -1)];

    }



    
}

const rotorI = new Rotor(['e','k','m','f','l','g','d','q','v','z','n','t','o','w','y','h','x','u','s','p','a','i','b','r','c','j'], 'a', 1, 'q');
const rotorII = new Rotor(['a', 'j', 'd', 'k', 's', 'i', 'r', 'u', 'x', 'b', 'l', 'h', 'w', 't', 'm', 'c', 'q', 'g', 'z', 'n', 'p', 'y', 'f', 'v', 'o', 'e'], 'a', 1, 'e');
const rotorIII = new Rotor(['b', 'd', 'f', 'h', 'j', 'l', 'c', 'p', 'r', 't', 'x', 'v', 'z', 'n', 'y', 'e', 'i', 'w', 'g', 'a', 'k', 'm', 'u', 's', 'q', 'o'], 'a', 1, 'v');

export default Rotor;




