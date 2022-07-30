export default class Plugboard {
    // pairs should be pre-processed as an object of characters - e.g./ {'a': 'c', 'c': 'a'...}
    constructor(pairs) {
        this.pairs = pairs
    }
    // return swapped character (if it is paired up) or the character itself otherwise
    swap(char) {
        if (char in this.pairs) {
            return this.pairs[char];
        }
        else {
            return char;
        }
    }


}