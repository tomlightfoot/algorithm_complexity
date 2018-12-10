'use strict'
const { PerformanceObserver, performance } = require('perf_hooks')
const stringify = require('csv-stringify');
const fs = require('fs');
const test = require('./shuffle.js')



function testTime(func, arg) {
  var t0 = performance.now()
  func(arg)
  var t1 = performance.now()
  return (t1 - t0)
}

let results = []
let length = []
let arr = []

function createArray(size) {
  let arr = []
  for (var i = 0; i < size; i++) {
    arr.push(i)
  }
  return arr
}

for (var arraySize = 5000; arraySize <= 200000; arraySize += 5000) {
  let arr = createArray(arraySize);
  let x = testTime(test.shuffle, arr)
  results.push(x);
  length.push(arraySize);
  console.log(arraySize + '\t' + x);

}

let csv_array = [["LENGTH", "TIME-TAKEN"]]

// console.log(results);

for(var i = 0; i < results.length; i++) {
  csv_array.push([length[i], results[i]] + ",\n")
}

stringify(csv_array, function(err, output) {
  fs.writeFile('results.csv', output, 'utf8', function(err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else {
      console.log('It\'s saved!');
    }
  });
});
