/* global describe, it */
import assert from 'assert'
import getContrastRatio from '../build/index.js'

describe('Built output', () => {
  it('should export a working ESM module', () => {
    assert.strictEqual(typeof getContrastRatio, 'function')
  })

  it('should calculate contrast ratio correctly from built output', () => {
    assert.strictEqual(getContrastRatio('black', 'white'), 21)
    assert.strictEqual(getContrastRatio('black', 'black'), 1)
  })
})
