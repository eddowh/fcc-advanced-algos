/**
 * Validate US Telephone Numbers
 * =============================
 *
 * Return true if the passed string is a valid US phone number.
 *
 * The user may fill out the form field any way they choose as long as it is a valid US number. The
 * following are examples of valid formats for US numbers (refer to the tests below for other
 * variants):
 *
 *     555-555-5555
 *     (555)555-5555
 *     (555) 555-5555
 *     555 555 5555
 *     5555555555
 *     1 555 555 5555
 *
 * For this challenge you will be presented with a string such as 800-692-7753 or
 * 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any
 * combination of the formats provided above. The area code is required. If the country code is
 * provided, you must confirm that the country code is 1. Return true if the string is a valid US
 * phone number; otherwise return false.
 *
 */


var MIN_US_TEL_NO_LENGTH = 10;
var MAX_US_TEL_NO_LENGTH = 11;

function telephoneCheck(str) {
  // keep only parenthesis, dashes, and numbers
  str = str.replace(/[^0-9()-]/g, '');
  if (str.length < MIN_US_TEL_NO_LENGTH) { return false; }
  // can't have more than one parenthesis pair
  var lpc = str.split('(').length - 1,  // lpc == left parenthesis count
      rpc = str.split(')').length - 1,  // rpc == right parenthesis count
      pcSum = lpc + rpc;                // pcSum == parenthesis count sum
  if ((lpc !== rpc) || !(pcSum === 2 || pcSum === 0)) { return false; }
  // check the valid parenthesis wrap around only 3 numbers
  if (pcSum === 2) {
    var lpIndex = str.indexOf('('),
        rpIndex = str.indexOf(')');
    if (rpIndex - lpIndex - 1 !== 3) { return false; }
  }
  // parenthesis validation ends, replace parenthesis with spaces
  str = str.replace(/[\(\)]/g, '');
  // now, first character must be numeric
  if (isNaN(parseInt(str[0]))) { return false; }
  // non-numeric validation ends, safely replace everything but numbers
  str = str.replace(/[^0-9]/g, '');
  // has international code
  if (str.length > MIN_US_TEL_NO_LENGTH) {
    if (str.length > MAX_US_TEL_NO_LENGTH) { return false; }
    if (str[0] !== '1') { return false; }
  }
  // VALIDATES!
  return true;
}

module.exports = telephoneCheck;
