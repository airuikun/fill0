var fill0 = require('.')
var should = require('should')

it('should pad 0s to input', function () {
  should(fill0(3, 5)).equal('00003')
})
