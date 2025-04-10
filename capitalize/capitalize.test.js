const capitalize = require('./capitalize')

test('String is String type', () => {
    expect(() => capitalize(0)).toThrow()
})

test('String capitalized', () => {
    expect(capitalize('string')).toBe('String')
})