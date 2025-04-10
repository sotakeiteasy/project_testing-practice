const caesarCipher = require('./caesarCipher')

test("CaesarCipher takes correct vars", () => {
    expect(() => caesarCipher(1)).toThrow("Object is not correct format");
})

test("CaesarCipher make shift", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd")
    expect(caesarCipher("abc", 2)).toBe("cde")
    expect(caesarCipher("abc", 3)).toBe("def")
})

test("CaesarCipher correctly works with end of the alphabet", () => {
    expect(caesarCipher("xyz")).toBe("yza")
    expect(caesarCipher("xyz", 3)).toBe("abc")
    expect(caesarCipher("yza", 3)).toBe("bcd")
    expect(caesarCipher("zab", 3)).toBe("cde")
})

test("CaesarCipher correctly works with case preservation", () => {
    expect(caesarCipher("xYz")).toBe("yZa")
    expect(caesarCipher("StRiNg", 2)).toBe("UvTkPi")
})

test("CaesarCipher correctly works with punctuation", () => {
    expect(caesarCipher("Hey, Bob")).toBe("Ifz, Cpc") 
    expect(caesarCipher("Hello, world!", 2)).toBe("Jgnnq, yqtnf!")
})

