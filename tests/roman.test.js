// tests/roman.test.js
const { toRoman } = require('../src/roman');

describe('Roman numerals - Red 1', () => {
  test('should converts 1 to Roman numerals "I"', () => {
    expect(toRoman(1)).toBe('I');
  });

  test('should converts 2 to Roman numerals "II"', () => {
    expect(toRoman(2)).toBe('II');
  });

  test('should converts 2 to Roman numerals "III"', () => {
    expect(toRoman(3)).toBe('III');
  });
  test('should throw if input value is not greater than 1', () => {
    expect(() => toRoman(0)).toThrow('Input value must be greater than 1');
  })
  test('should throw if input value is not less than 3999',()=>{
    expect(() => toRoman(4000)).toThrow('Input value must be less than 3999')
  })

  //Red 2
  test('should converts 4 to Roman numerals "IV"',() => {
    expect(toRoman(4)).toBe('IV');
  })
  test('should converts 9 to Roman numerals "IX"',() => {
    expect(toRoman(9)).toBe('IX');
  })
});
