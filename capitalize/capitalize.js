function capitalize (string) {
    if (typeof(string) !== String) {
        throw(error)
    }
    return string.slice(1).charAt(0)
}

module.exports = capitalize