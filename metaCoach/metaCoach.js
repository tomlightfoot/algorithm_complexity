let test = {}

test.metaCoach = function(array, arg) {
  let results = []

  for(i = 0; i < (array.length -1); i++) {
    for(x = (i + 1); x < (array.length); x++) {
      results.push([array[i], array[x]])
    }
  }

  return results
}

module.exports = test
