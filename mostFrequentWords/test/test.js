const test = require('../mostFrequentWords.js')
const chai = require('chai')
const expect = chai.expect;

describe('duplicate testing', function() {
  it('it should take array with duplicates (basic), return true', function() {
    expect(test.mostFrequentWords(["Tom", "Tom", "Lucas", "Lucas", "Zoe"])).to.equal([
      "Tom",
      "Lucas"
    ])
  })
})
