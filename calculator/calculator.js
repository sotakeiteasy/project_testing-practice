
const calculator = (() => {
    validateNumbers = (numberOne, numberTwo) => {
        if (typeof(numberOne) !== 'number' || typeof(numberTwo) !== "number") {
            throw new Error('Object is not number')
        }
    };

    return {
        add(numberOne, numberTwo) {
            validateNumbers(numberOne, numberTwo)
            return numberOne + numberTwo;
        },
        subtract(numberOne, numberTwo) {
            validateNumbers(numberOne, numberTwo)
            return numberOne - numberTwo;
        },

        divide(numberOne, numberTwo) {
            validateNumbers(numberOne, numberTwo)
            return numberOne / numberTwo
        },

        multiply(numberOne, numberTwo) {
            validateNumbers(numberOne, numberTwo)
            return numberOne * numberTwo
        }
    }
})()

module.exports = calculator