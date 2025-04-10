const calculator = require('./calculator')

test('function takes only number', () => {
    expect(() => calculator.add('string', 1)).toThrow()
    expect(() => calculator.subtract('string', 1)).toThrow()
    expect(() => calculator.divide('string', 1)).toThrow()
    expect(() => calculator.multiply('string', 1)).toThrow()
})

test("add function correct", () => {
    expect(calculator.add(1, 3)).toBe(4)
})

test("subtract function correct", () => {
    expect(calculator.subtract(1, 3)).toBe(-2)
})

test("divide function correct", () => {
    expect(calculator.divide(5, 2)).toBe(2.5)
})

test("multiply function correct", () => {
    expect(calculator.multiply(5, 2)).toBe(10)
})