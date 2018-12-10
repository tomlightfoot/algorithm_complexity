let test = {}

test.shellSort = function(arr) {
  let interval = 1
  while (interval < arr.length/3) {
    interval = interval * 3 + 1
  }

  while (interval > 0) {

    for (outer = interval; outer < arr.length; outer ++) {
    valueToInsert = arr[outer]
    inner = outer;
       while (inner > interval -1 && arr[inner - interval] >= valueToInsert) {
          arr[inner] = arr[inner - interval]
          inner = inner - interval
       }
    arr[inner] = valueToInsert

    }
  interval = (interval - 1) /3;
  }
  return arr
}

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
