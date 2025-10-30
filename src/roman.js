// src/roman.js
// Roman numerals converter (TDD target)
// Public API: toRoman(n: number): string

/**
 * Convertit un entier (1..3999) en chiffres romains.
 * Utilise une table de conversion descendante (avec cas soustractifs).
 * @param {number} n
 * @returns {string}
 */
function toRoman(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError('Input value must be an integer');
  }
  if (n < 1 || n > 3999) {
    throw new RangeError('Input value must be between 1 and 3999');
  }

  const table = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';
  let value = n;

  for (const [arabic, roman] of table) {
    while (value >= arabic) {
      result += roman;
      value -= arabic;
    }
    if (value === 0) break;
  }

  return result;
}

module.exports = {toRoman};