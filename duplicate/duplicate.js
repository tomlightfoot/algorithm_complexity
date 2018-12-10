let test = {}

test.duplicates = function(array) {
  for(pointer = 0; pointer < array.length; pointer++) {
    let x = array[pointer]
    for(i = (pointer + 1); i < array.length; i++) {
      if (x === array[i]) {
        return true
      }
    }
  }
  return false
}

test.duplicates2 = function(array) {
  let count = []
  for (let i = 0; i < array.length; i++) {
    if (count.find(function(element) {
      return element == array[i]
    }) === undefined) {
      count.push(array[i])
    } else {
      return true
    }
  }
  return false
}

test.duplicates3 = function(array) {
  for(let i = 0; i < array.length; i++) {
    if ((array.filter(x => x === array[i]).length) > 1) {
      return true
    }
  }
  return false
}

test.duplicates4 = function(array) {
  b = {}

  for(i = 0; i < array.length; i++){
    if (b[array[i]] === 1) {
      return true
    } else{
      b[array[i]] = 1
    }
  }
  return false
}

module.exports = test;
