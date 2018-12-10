const test = require('../sorting.js')
const chai = require('chai')
const expect = chai.expect;

describe('duplicate testing', function() {
  it('it should take array with duplicates (basic), return true', function() {
    expect(test.shellSort([2, 5, 3, 6, 18, 4, 12])).to.equal([
      2,
      3,
      4,
      5,
      6,
      12,
      18
    ])
  })
})
