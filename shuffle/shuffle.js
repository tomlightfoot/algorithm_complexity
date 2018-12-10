let test = {}

test.shuffle = function(array) {
  let results = []

  for(var i = 0; i < array.length; i) {
    let x = Math.floor(Math.random()*array.length)
    let y = array[x]
    let z = array[array.length - 1]
    results.push(y)
    array[array.length - 1] = y
    array[x] = z
    array.splice((array.length-1), 1)
  }
  return results
}

module.exports = test
