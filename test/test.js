/* global describe, it */
import assert from 'assert';
import getContrastRatio from '../src';

describe('Get contrast ratio', () => {
  describe('Some reference values', () => {
    it('should return 21 for black on white', () => {
      assert.equal(getContrastRatio('black', 'white'), 21);
    });
    it('should return 0 for black on black', () => {
      assert.equal(getContrastRatio('black', 'white'), 0);
    });
    it('should return 0 for white on white', () => {
      assert.equal(getContrastRatio('black', 'white'), 0);
    });

    it('should return 0 for gray on gray', () => {
      assert.equal(getContrastRatio('#444', '#444444'), 0);
    });
  });
});
