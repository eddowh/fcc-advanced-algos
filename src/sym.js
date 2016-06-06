/**
 * Symmetric Difference
 * ====================
 *
 * Create a function that takes two or more arrays and returns an array of the symmetric difference
 * (△ or ⊕) of the provided arrays.
 *
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term
 * "symmetric difference" of two sets is the set of elements which are in either of the two sets,
 * but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on
 * a set D = {2, 3}), you should get the set with elements which are in either of the two the sets
 * but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 *
 */


// Helper functions
var removeDuplicates = require('../utils/arrayHelpers.js').removeDuplicates;


/**
 * Returns the (unsorted) array of symmetric difference from two arrays.
 *
 * @param {Array} x The 1st array.
 * @param {Array} y The 2nd array.
 */
function symDiff(x, y) {
  var a = removeDuplicates(x),
      b = removeDuplicates(y),
      arr = [];
  for (var i in a) {
    var el = a[i];
    var idxB = b.indexOf(el);
    // we will later concenate `z` with `arr`
    // so we pop elements that also appear in `z`
    if (idxB !== -1)
      b.splice(idxB, 1);
    else  // it belongs in `arr`
      arr.push(el);
  }
  return arr.concat(b);
}


/**
 * Returns a sorted array of symmetric difference from two or more arrays.
 *
 * Checks for duplicates and removes them.
 */
function sym() {
  var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  var res = args.reduce(symDiff);
  res.sort();
  return res;
}

module.exports = sym;
