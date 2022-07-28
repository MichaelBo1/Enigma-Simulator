export default class Reflector {
    constructor(cipher) {
        // A 26-character object containing key-value pairs, e.g., {"a": "d", "d": "a", ...}
        this.cipher = cipher;
    }

    reflect(char) {
        // swap the given character pairwise
        return this.cipher[char];
    }
}