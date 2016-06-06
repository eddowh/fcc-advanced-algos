// load Unit.js module
var test = require('unit.js');

// load function
var sym = require('../src/sym.js');


describe('symTest', function() {

  it('general asserts', function() {
    test.value(sym([1, 2, 3], [5, 2, 1, 4])).is([3, 4, 5]);
    test.value(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).is([1, 4, 5]);
    test.value(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).is([1, 4, 5]);
    test.value(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
        .is([2, 3, 4, 6, 7]);
    test.value(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
        .is([1, 2, 4, 5, 6, 7, 8, 9]);
  });

  it('validate lengths', function() {
    test.value(sym([1, 2, 3], [5, 2, 1, 4]).length)
        .is(3);
    test.value(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length)
        .is(3);
    test.value(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length)
        .is(3);
    test.value(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length)
        .is(5);
    test.value(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length)
        .is(8);
  });

});
