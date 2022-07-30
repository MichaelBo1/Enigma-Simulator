export default class Machine {
    // ([rotor1, rotor2, rotor3], reflector, plugboard)
    constructor(rotors, reflector, plugboard) {
        this.rotors = rotors;
        this.reflector = reflector;
        this.plugboard = plugboard;
    }

    encodeChar(char) {
        // step middle rotor if right rotor is at stepping point
        if (this.rotors[2].atSteppingPoint()) {
            // step left rotor it middle is also at stepping point
            if (this.rotors[1].atSteppingPoint()) {
                this.rotors[0].step();
            }
            // step middle rotor
            this.rotors[1].step();
        }
        // right rotor is stepped after every character press
        this.rotors[2].step();

        // feed in character to be encrypted
        char = this.plugboard.swap(char);
        char = this.encodeForwards(char);
        char = this.reflector.reflect(char);
        char = this.encodeBackwards(char);

        return char;
    }

    encodeForwards(char) {
        let count = 2;
        // pass through right - middle - left
        while (count >= 0) {
            char = this.rotors[count].forwardPass(char);
            count--; 
        }
        return char;
    }
    encodeBackwards(char) {
        let count = 0;
        // pass through left - middle - right after reflection
        while (count < 3)  {
            char = this.rotors[count].reversePass(char);
            count++;
        }
        return char;
    }   

    // reset configurations of rotors and plugboard
    reset() {
        for (let rotor of this.rotors) {
            rotor.setRotor('a');
            rotor.setRing(1);
        }

        this.plugboard.pairs = {};
    }
}