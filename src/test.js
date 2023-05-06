//const validator = require('./validator');

import validator from './validator.js';

describe('isValid function', () => {
  test('should return true for a valid credit card number', () => {
    expect(validator.isValid('4111111111111111')).toBe(true);
  });

  test('should return false for an invalid credit card number', () => {
    expect(validator.isValid('1234567890123456')).toBe(false);
  });
});

describe('maskify function', () => {
  test('should mask all but the last 4 digits of a credit card number', () => {
    expect(validator.maskify('4111111111111111')).toBe('############1111');
  });

  test('should not mask a credit card number with fewer than 5 digits', () => {
    expect(validator.maskify('1234')).toBe('1234');
  });
});
