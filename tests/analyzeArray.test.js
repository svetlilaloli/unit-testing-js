const analyzeArray = require("../src/analyzeArray");

test('test NOT array returns undefined', () => {
    expect(analyzeArray({"name": "john"})).toBe(undefined);
});
test('test zero length array returns undefined', () => {
    expect(analyzeArray([])).toBe(undefined);
});
test('test string array returns undefined', () => {
    expect(analyzeArray(["2"])).toBe(undefined);
});
test('test single element array returns correct', () => {
    expect(analyzeArray([2])).toStrictEqual({"length": 1, "max": 2, "min": 2});
});
test('test equal elements array returns correct', () => {
    expect(analyzeArray([2, 2, 2])).toStrictEqual({"length": 3, "max": 2, "min": 2});
});
test('test equal elements array returns correct', () => {
    expect(analyzeArray([2.3, 1.2, -9.32])).toStrictEqual({"length": 3, "max": 2.3, "min": -9.32});
});