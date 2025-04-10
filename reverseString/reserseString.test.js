const reverseString = module.require("./reverseString")

test('String expexted to be string type', () => {
    expect(() => reverseString(0)).toThrow()
})

test("String expected to be reversed", () => {
    expect(reverseString('string')).toBe('gnirts')
})