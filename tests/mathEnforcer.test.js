const mathEnforcer = require('../src/mathEnforcer');

describe('addFive', () => {
    test('test not a number returns undefined', () => {
        expect(mathEnforcer.addFive("123")).toBe(undefined);
    });
    test('test floating point returns correct', () => {
        expect(mathEnforcer.addFive(454.755)).toBe(459.755);
    });
    test('test integer returns correct', () => {
        expect(mathEnforcer.addFive(4654)).toBe(4659);
    });
    test('test negative number returns correct', () => {
        expect(mathEnforcer.addFive(-4654)).toBe(-4649);
    });
});

describe('subtractTen', () => {
    test('test not a number returns undefined', () => {
        expect(mathEnforcer.subtractTen("123")).toBe(undefined);
    });
    test('test floating point returns correct', () => {
        expect(mathEnforcer.subtractTen(454.755)).toBe(444.755);
    });
    test('test integer returns correct', () => {
        expect(mathEnforcer.subtractTen(4654)).toBe(4644);
    });
    test('test negative number returns correct', () => {
        expect(mathEnforcer.subtractTen(-4654)).toBe(-4664);
    });
});

describe('sum', () => {
    test('test first parameter not a number returns undefined', () => {
        expect(mathEnforcer.sum("123", 123)).toBe(undefined);
    });
    test('test second parameter not a number returns undefined', () => {
        expect(mathEnforcer.sum(123, "123")).toBe(undefined);
    });
    test('test floating point returns correct', () => {
        expect(mathEnforcer.sum(454.755, 758475.4343)).toBe(758930.1893);
    });
    test('test integer returns correct', () => {
        expect(mathEnforcer.sum(4654, 7584756456546)).toBe(7584756461200);
    });
    test('test first number is negative returns correct', () => {
        expect(mathEnforcer.sum(-4654, 7584756456546)).toBe(7584756451892);
    });
    test('test second number is negative returns correct', () => {
        expect(mathEnforcer.sum(4654, -7584756456546)).toBe(-7584756451892);
    });
    test('test both numbers are negative returns correct', () => {
        expect(mathEnforcer.sum(-4654, -7584756456546)).toBe(-7584756461200);
    });
});