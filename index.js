module.exports = function (number, length) {
  if (typeof number !== 'number') {
    throw Error('Not a number')
  }

  var result = number.toString()
  while (result.length < length) {
    result = '0' + result
  }
  return result
}
