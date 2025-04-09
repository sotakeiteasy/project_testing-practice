const capitalize = require('./capitalize')

test('String capitalized', () => {
    expect(capitalize('string')).toBe('String')
})