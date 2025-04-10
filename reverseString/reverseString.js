function reverseString(string) {
    if(string != 'string') {
        throw new Error("object is not string")
    }

    return string.split('').reverse().join('')
}
module.exports = reverseString