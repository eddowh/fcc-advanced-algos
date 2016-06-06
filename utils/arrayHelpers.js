/**
 * Helper functions for arrays
 * ===========================
 *
 *   - sumArray
 *   - removeDuplicates
 *
 */


/**
 * Returns the sum of an array of numbers
 *
 * @param {Array} arr The array of numbers.
 */
function sumArray(arr) {
  return arr.reduce(function(x, y) { return x + y; }, 0);
}


/**
 * Remove duplicates in an array.
 *
 * Courtesy of StackOverflow user georg.
 *   See <http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array>
 *
 * @param {Array} arr An array.
 */
function removeDuplicates(arr) {
  var seen = {},
      out = [],
      j = 0;
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
      if (seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
  }
  return out;
}


module.exports = {
  sumArray: sumArray,
  removeDuplicates: removeDuplicates
}
