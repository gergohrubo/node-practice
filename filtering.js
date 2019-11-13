function jsonfilter(data) {
  console.log('---')
  console.log(data)
  console.log('---')
  return data.filter(item => {
    console.log('starting the loop', item)
    console.log(typeof item)
    if (typeof item === 'object') {
      return jsonfilter(item)
    } else if (typeof item !== 'string') {
      console.log('returning true', item)
      return true
    }
    console.log('returning false', item)
    return false
  })
}

// tests
console.log('test 1:', JSON.stringify(jsonfilter([1,'a'])) == JSON.stringify([1]))
var testdata = [1, 2, 309634, ['hello', -42, 'foo bar'], 5]
var refdata = [1, 2, 309634, [-42], 5]
var resultData = jsonfilter(testdata)
console.log(resultData)
console.log('test 1:', JSON.stringify(resultData) == JSON.stringify(refdata))