/**
 * Jest configuration for CC1 TDD - Roman Numerals (JavaScript)
 * - CommonJS project
 * - Tests live under /tests
 */
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
};
