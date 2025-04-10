function capitalize (string) {
    if (typeof(string) !== 'string') {
        throw new Error("object is not string")
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = capitalize