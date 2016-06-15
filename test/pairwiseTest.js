// load Unit.js module
var test = require('unit.js');

// load function
var pairwise = require('../src/pairwise.js');


describe('pairwiseTest', function() {

  it('general asserts', function() {
    test.value(pairwise([1, 4, 2, 3, 0, 5], 7)).is(11);
    test.value(pairwise([1, 3, 2, 4], 4)).is(1);
  });

  it('multiple pairs with same numeric elements', function() {
    test.value(pairwise([1, 1, 1], 2)).is(1);
    test.value(pairwise([0, 0, 0, 0, 1, 1], 1)).is(10);
  });

  it('empty array', function() {
    test.value(pairwise([], 100)).is(0);
  });

});
