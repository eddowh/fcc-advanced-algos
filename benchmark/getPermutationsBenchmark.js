/**
 * Benchmark test on:
 * ==================
 *
 *   - getPermutationsIterative
 *   - getPermutationsRecursive
 *
 */


var Benchmark = require('benchmark');

var stringHelpers = require('../utils/stringHelpers.js')
var getPermutationsIterative = stringHelpers.getPermutationsIterative;
var getPermutationsRecursive = stringHelpers.getPermutationsRecursive;


function logTitle(inp) {
  var title = "INPUT = " + inp;
  console.log(title);
  console.log(new Array(title.length + 1).join("="));
}

function runTests(inp) {
  logTitle(inp);
  var suite = new Benchmark.Suite('getPermutations', {
    'onCycle': function(event) { console.log(String(event.target)); }
  });
  suite
    .add('iterative', function() { return getPermutationsIterative(inp); })
    .add('recursive', function() { return getPermutationsRecursive(inp); })
    .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').map('name') + '\n');
    })
    .run({ 'async': false });
}

runTests("a");
runTests("ab");
runTests("abc");
runTests("abcd");
runTests("abcde");
runTests("abcdef");
runTests("abcdefg");
// runTests("abcdefghi"); // takes too long
