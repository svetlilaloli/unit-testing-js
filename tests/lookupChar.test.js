const lookupChar = require('../src/lookupChar');

test('test NOT a string returns undefined', () => {
    expect(lookupChar({ "name": "John", "age": 20 }, 5)).toBe(undefined);
});
test('test NOT a number returns undefined', () => {
    expect(lookupChar("string", { "name": "John", "age": 20 })).toBe(undefined);
});
test('test NOT an integer returns undefined', () => {
    expect(lookupChar("string", 4.5)).toBe(undefined);
});
test('test index out of range returns "Incorrect index"', () => {
    expect(lookupChar("string", 6)).toBe('Incorrect index');
});
test('test negative index returns "Incorrect index"', () => {
    expect(lookupChar("string", -1)).toBe('Incorrect index');
});
test('test correct parameters returns "g"', () => {
    expect(lookupChar("string", 5)).toBe('g');
});