const isOddOrEven = require('../src/isOddOrEven');

test('test an Object returns undefined', () => {
    expect(isOddOrEven({ "name": "John", "age": 20 })).toBe(undefined);
});

test('test a Number returns undefined', () => {
    expect(isOddOrEven(9)).toBe(undefined);
});

test('test a string with even length', () => {
    expect(isOddOrEven("hi")).toBe("even");
}); 

test('test a string with odd length', () => {
    expect(isOddOrEven("hello")).toBe("odd");
}); 

test('test a longer string with even length', () => {
    expect(isOddOrEven("Hello. My name is Maria and I come from Italy :)")).toBe("even");
}); 