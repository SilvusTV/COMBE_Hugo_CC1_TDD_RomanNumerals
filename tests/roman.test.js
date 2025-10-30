// tests/roman.test.js
const { toRoman } = require('../src/roman');

describe('Roman numerals', () => {

  //Red 1
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
    expect(() => toRoman(0)).toThrow('Input value must be between 1 and 3999');
  })
  test('should throw if input value is not less than 3999',()=>{
    expect(() => toRoman(4000)).toThrow('Input value must be between 1 and 3999')
  })

  //Red 2
  test('should converts 4 to Roman numerals "IV"',() => {
    expect(toRoman(4)).toBe('IV');
  })
  test('should converts 9 to Roman numerals "IX"',() => {
    expect(toRoman(9)).toBe('IX');
  })

  //Red3
  test('should throw exception if input value is not an integer', () => {
    expect(() => toRoman(3.5)).toThrow('Input value must be an integer')
  })
  test('should throw exception if input value in not a number', () => {
    expect(() => toRoman("a")).toThrow('Input value must be an integer')
  })
  test('should every Roman letter I,V,X,L,C,D,M appears at least once', () => {
    const seen = new Set();

    for (let n = 1; n <= 3999; n++) {
      const r = toRoman(n);
      for (const ch of r) seen.add(ch);
      if (seen.size === 7) break; // optimisation: on peut s’arrêter tôt
    }

    const expected = new Set(['I', 'V', 'X', 'L', 'C', 'D', 'M']);
    expected.forEach(ch => expect(seen.has(ch)).toBe(true));
  });
  test('sould at least one number produces each subtractive pair', () => {
    const targets = new Map([
      ['IV', 4],
      ['IX', 9],
      ['XL', 40],
      ['XC', 90],
      ['CD', 400],
      ['CM', 900],
    ]);

    for (const [pair, n] of targets.entries()) {
      expect(toRoman(n)).toContain(pair);
    }
  });
  test('should convert 58 to "LVIII"', () => {
    expect(toRoman(58)).toBe('LVIII');
  })
  test('should convert 1994 to "MCMXCIV"', () => {
    expect(toRoman(1994)).toBe('MCMXCIV');
  })
  test('should convert 3999 to "MMMCMXCIX"', () => {
    expect(toRoman(3999)).toBe('MMMCMXCIX');
  })
});
