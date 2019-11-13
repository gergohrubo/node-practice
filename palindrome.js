function palindrome(word) {
    if (word.length < 2) {
        return true
    }
    else if (word[0] === word[word.length-1]) {
        return palindrome(word.slice(1,-1))
    }
    return false
}

// test
function test (word, is_palindrome) {
  const answer = palindrome(word)
  console.log('answer test:', answer)
  if (answer === is_palindrome) {
    
    console.log("passed")
  } else {
    console.log(`palindrome('${word}') should have been ${is_palindrome} but was ${answer}`)
  }
}
console.log('--- start ---')
test('noon', true)
test('civic', true)
test('test', false)