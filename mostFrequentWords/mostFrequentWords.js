let test = {}

test.mostFrequentWords = function(array) {
  b = {}

  for(i = 0; i < array.length; i++){
    if (b[array[i]] != undefined) {
      b[array[i]] += 1
    } else{
      b[array[i]] = 1
    }
  }
  return false
}
}

module.exports = test
