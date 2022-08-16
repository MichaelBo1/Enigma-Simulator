import Reflector from "./Reflector.js";

export default function getReflector(val) {
    switch (val) {
        case 'A':
            return new Reflector({
                'a': 'e', 'b': 'j', 'c': 'm', 'd': 'z', 'e': 'a', 'f': 'l', 'g': 'y', 'h': 'x', 'i': 'v', 'j': 'b', 'k': 'w', 'l': 'f', 'm': 'c', 'n': 'r', 'o': 'q', 'p': 'u', 'q': 'o', 'r': 'n', 's': 't', 't': 's', 'u': 'p', 'v': 'i', 'w': 'k', 'x': 'h', 'y': 'g', 'z': 'd'
            })
        case 'B':
            return new Reflector({
                'a': 'y', 'b': 'r', 'c': 'u', 'd': 'h', 'e': 'q', 'f': 's', 'g': 'l', 'h': 'd', 'i': 'p', 'j': 'x', 'k': 'n', 'l': 'g', 'm': 'o', 'n': 'k', 'o': 'm',
                'p': 'i', 'q': 'e', 'r': 'b', 's': 'f', 't': 'z', 'u': 'c', 'v': 'w', 'w': 'v'
                , 'x': 'j', 'y': 'a', 'z': 't'
            })
        case 'C':
            return new Reflector({
                'a': 'f', 'b': 'v', 'c': 'p', 'd': 'j', 'e': 'i', 'f': 'a', 'g': 'o', 'h': 'y', 'i': 'e', 'j': 'd', 'k': 'r', 'l': 'z', 'm': 'x', 'n': 'w', 'o': 'g', 'p': 'c', 'q': 't', 'r': 'k', 's': 'u', 't': 'q', 'u': 's', 'v': 'b', 'w': 'n', 'x': 'm', 'y': 'h', 'z': 'l'
            })
        default:
            return new Reflector({
                'a': 'y', 'b': 'r', 'c': 'u', 'd': 'h', 'e': 'q', 'f': 's', 'g': 'l', 'h': 'd', 'i': 'p', 'j': 'x', 'k': 'n', 'l': 'g', 'm': 'o', 'n': 'k', 'o': 'm',
                'p': 'i', 'q': 'e', 'r': 'b', 's': 'f', 't': 'z', 'u': 'c', 'v': 'w', 'w': 'v'
                , 'x': 'j', 'y': 'a', 'z': 't'
            })
    }
}