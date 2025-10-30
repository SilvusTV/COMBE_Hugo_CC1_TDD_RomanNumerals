// src/roman.js
// Roman numerals converter (TDD target)
// Public API: toRoman(n: number): string

/**
 * Convertit un entier (1..3999) en chiffres romains.
 * Implémentation à écrire via TDD.
 * @param {number} n
 * @returns {string}
 */
function toRoman(n) {
  if (n < 1 ) {
    throw new RangeError('Input value must be greater than 1');
  }else if (n > 3999) {
    throw new RangeError('Input value must be less than 3999');
  }
  if (n === 1) {
    return 'I';
  }else if (n === 2) {
    return 'II';
  }else if (n === 3) {
    return 'III';
  }
}

module.exports = { toRoman };
