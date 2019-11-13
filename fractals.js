function ruler(n) {
  
  // ...
}

// test
function test (num, should_become) {
if (ruler(num) === should_become) {
  console.log("test passed")
} else {
  console.log(`ruler(${num}) should have been`, should_become, `but was`, ruler(num))
}
}
test(1, '+')
test(2, '+\n++\n+')
test(3, '+\n++\n+\n+++\n+\n++\n+')
console.log(ruler(5))