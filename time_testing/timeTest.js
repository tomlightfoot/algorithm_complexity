const { PerformanceObserver, performance } = require('perf_hooks')
const stringify = require('csv-stringify');
const fs = require('fs');

function array(length) {
  var arr = []
  for(i = 0; i < length; i++) {
    arr.push(i)
  }
  return arr
}

function testTime(array) {
  var t0 = performance.now()
  array[array.length - 1]
  var t1 = performance.now()
  return (t1 - t0)
}

results = []
length = []

for(i = 0; i <= 1000000; i+=50000) {
  results.push(testTime(array(i)))
  length.push(i)
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
