const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const alphabetUpper = alphabet.map(letter => letter.toUpperCase())

function caesarCipher(string , shift = 1) {
    if (typeof(string) !== "string" || typeof(shift) !== "number") {
        throw new Error("Object is not correct format")
    }

    const newString = string.split('').map((letter) => {
        const lowerLetter = letter.toLowerCase()
        const index = alphabet.indexOf(lowerLetter)

        if (index === -1) return letter;
        
        const newIndex = (index + shift) % alphabet.length

        return letter === lowerLetter ? alphabet[newIndex] : alphabetUpper[newIndex]
    })

    return newString.join('')
}

module.exports = caesarCipher