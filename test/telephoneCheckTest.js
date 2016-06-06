// load Unit.js module
var test = require('unit.js');

// load function
var telephoneCheck = require('../src/telephoneCheck.js');


describe('telephoneCheckTest', function() {

  it('output type: boolean', function() {
    test.bool(telephoneCheck("555-555-5555"));
  });

  it('valid numbers', function() {
    test.assert(telephoneCheck("1 555-555-5555") === true);
    test.assert(telephoneCheck("1 (555) 555-5555") === true);
    test.assert(telephoneCheck("5555555555") === true);
    test.assert(telephoneCheck("555-555-5555") === true);
    test.assert(telephoneCheck("(555)555-5555") === true);
    test.assert(telephoneCheck("1(555)555-5555") === true);
    test.assert(telephoneCheck("1 555 555 5555") === true);
    test.assert(telephoneCheck("1 456 789 4444") === true);
  });

  it('unclosed parentheses', function() {
    test.assert(telephoneCheck("1 555)555-5555") === false);
    test.assert(telephoneCheck("555)-555-5555") === false);
    test.assert(telephoneCheck("(555-555-5555") === false);
  });

  it('alphanumeric characters', function() {
    test.assert(telephoneCheck("123**&!!asdf#") === false);
  });

  it('incorrect length', function() {
    test.assert(telephoneCheck("55555555") === false);
  });

  it('parenthesis wrapped around valid number', function() {
    test.assert(telephoneCheck("(6505552368)") === false);
  });

  it('invalid international/area codes', function() {
    test.assert(telephoneCheck("2 (757) 622-7382") === false);
    test.assert(telephoneCheck("0 (757) 622-7382") === false);
    test.assert(telephoneCheck("-1 (757) 622-7382") === false);
    test.assert(telephoneCheck("2 757 622-7382") === false);
    test.assert(telephoneCheck("10 (757) 622-7382") === false);
    test.assert(telephoneCheck("27576227382") === false);
    test.assert(telephoneCheck("(275)76227382") === false);
    test.assert(telephoneCheck("2(757)6227382") === false);
    test.assert(telephoneCheck("2(757)622-7382") === false);
  });

});
