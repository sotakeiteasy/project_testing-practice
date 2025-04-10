function analyzeArray(array) {
    if (!Array.isArray(array)) {
        throw new Error("Object is not array");
    }

    const arrayProps = {
        average: array.reduce((sum, current) => sum + current, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
    return arrayProps
}

module.exports = analyzeArray