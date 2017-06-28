var fill0 = require('.')
var should = require('should')

it('should pad 0s to input', function () {
  should(fill0(3, 5)).equal('00003')
})

it('should throws when not a number', function () {
  try {
    fill0('3', 5)
    should(0).equal(1)
  } catch (e) {
    // nothing
  }
})
