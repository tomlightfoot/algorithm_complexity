const test = require('../shuffle.js')
const chai = require('chai')
const expect = chai.expect;

describe('duplicate testing', function() {
  it('it should take array with duplicates (basic), return true', function() {
    expect(test.shuffle(['Tom', 'Tom']).length).to.equal(2)
  })

  it('it should take array with duplicates (basic), return true', function() {
    expect(test.shuffle(['Lucas', 'Tom'])).to.equal(['Lucas','Tom'])
  })
})
