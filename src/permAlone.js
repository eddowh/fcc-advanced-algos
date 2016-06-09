/**
 * No repeats please
 * =================
 *
 * Return the number of total permutations of the provided string that don't have repeated
 * consecutive letters. Assume that all characters in the provided string are each unique.
 *
 * For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa,
 * baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 *
 */


/* ======== Helper functions ======== */
// Recursive method is way faster when `n` gets large
var stringHelpers = require('../utils/stringHelpers.js');
var getPermutationsIterative = stringHelpers.getPermutationsIterative;
var getPermutationsRecursive = stringHelpers.getPermutationsRecursive;


function permAlone(str) {
  // See `benchmark/getPermutationsBenchmark` to see optimal number
  var getPermutations = str.length > 4
    ? getPermutationsRecursive
    : getPermutationsIterative;
  var res = getPermutations(str);
  res = res.filter(function(s) {
    return !s.match(/(.)\1+/g);
  });
  return res.length;
}

module.exports = permAlone;
