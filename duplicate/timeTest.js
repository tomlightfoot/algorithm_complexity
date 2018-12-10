const { PerformanceObserver, performance } = require('perf_hooks')
const stringify = require('csv-stringify');
const fs = require('fs');
const test = require('./duplicate.js')

arr = []

function testTime(func) {
  let median = []
  for (var i = 0; i < 11; i++) {
    var t0 = performance.now()
    func(arr)
    var t1 = performance.now()
    median.push(t1 - t0)
  }
  median.sort((a, b) => a - b)
  return median[5]
}

results = []
length = []


for (var i = 0; i < 1000000; i++) {
  arr.push(i)
  if (i % 5000 === 0) {
    let x = testTime(test.duplicates4)
    results.push(x)
    length.push(i)
    console.log(i + '\t' + x);
  }
}

csv_array = [["LENGTH", "TIME-TAKEN"]]

for(i = 0; i < results.length; i++) {
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
