const analyzeArray = require('./analyzeArray')

test('analyzeArray takes only array', () => {
    expect(() => analyzeArray(null)).toThrow()
    expect(() => analyzeArray(undefined)).toThrow()
    expect(() => analyzeArray("string")).toThrow()
    expect(() => analyzeArray(23)).toThrow()
});

test('analyzeArray returns object', () => {
    expect(typeof analyzeArray([1,2,3,4,5])).toBe('object')
})

test('analyzeArray returns average', () => {
    expect(analyzeArray([1,2,3,4,5]).average).toBe(3)
})

test('analyzeArray returns min', () => {
    expect(analyzeArray([1,2,3,4,5]).min).toBe(1)
})

test('analyzeArray returns max', () => {
    expect(analyzeArray([1,2,3,4,5]).max).toBe(5)
})

test('analyzeArray returns length', () => {
    expect(analyzeArray([1,2,3,4,5]).length).toBe(5)
})