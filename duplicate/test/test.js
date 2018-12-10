const test = require('../duplicate.js')
const chai = require('chai')
const expect = chai.expect;


describe('duplicate testing', function() {
  it('it should take array with duplicates (basic), return true', function() {
    expect(test.duplicates(['Tom', 'Tom'])).to.equal(true)
  })

  it('it should take array with duplicates (complex), return true', function() {
    expect(test.duplicates(['Zoe', 'Tom', 'Lucas', 'Lucas', 'Tom'])).to.equal(true)
  })

  it('it should take array with no duplicates, return false', function() {
    expect(test.duplicates(['Zoe', 'Tom', 'Terry', 'Lucas'])).to.equal(false)
  })
})

describe('duplicate2 testing', function() {
  it('it should take array with duplicates (basic), return true', function() {
    expect(test.duplicates2(['Tom', 'Tom'])).to.equal(true)
  })

  it('it should take array with duplicates (complex), return true', function() {
    expect(test.duplicates2(['Zoe', 'Tom', 'Lucas', 'Lucas', 'Tom'])).to.equal(true)
  })

  it('it should take array with no duplicates, return false', function() {
    expect(test.duplicates2(['Zoe', 'Tom', 'Terry', 'Lucas'])).to.equal(false)
  })
})

describe('duplicate3 testing', function() {
  it('it should take array with duplicates (basic), return true', function() {
    expect(test.duplicates3(['Tom', 'Tom'])).to.equal(true)
  })

  it('it should take array with duplicates (complex), return true', function() {
    expect(test.duplicates3(['Zoe', 'Tom', 'Lucas', 'Lucas', 'Tom'])).to.equal(true)
  })

  it('it should take array with no duplicates, return false', function() {
    expect(test.duplicates3(['Zoe', 'Tom', 'Terry', 'Lucas'])).to.equal(false)
  })
})

describe('duplicate4 testing', function() {
  it('it should take array with duplicates (basic), return true', function() {
    expect(test.duplicates4(['Tom', 'Tom'])).to.equal(true)
  })

  it('it should take array with duplicates (complex), return true', function() {
    expect(test.duplicates4(['Zoe', 'Tom', 'Lucas', 'Lucas', 'Tom'])).to.equal(true)
  })

  it('it should take array with no duplicates, return false', function() {
    expect(test.duplicates4(['Zoe', 'Tom', 'Terry', 'Lucas'])).to.equal(false)
  })
})
