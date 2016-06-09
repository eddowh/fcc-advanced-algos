// load Unit.js module
var test = require('unit.js');

// load function
var permAlone = require('../src/permAlone.js');


describe('permAloneTest', function() {

  it('type checking: number', function() {
    test.number(permAlone("aab"));
  });

  it('general asserts', function() {
    test.value(permAlone("aab")).is(2);
    test.value(permAlone("aaa")).is(0);
    test.value(permAlone("aabb")).is(8);
    test.value(permAlone("aaabb")).is(12);
  });

  it('many combinations!', function() {
    test.value(permAlone("abcdefa")).is(3600);
    test.value(permAlone("abfdefa")).is(2640);
  });

  it('single letter returns 1', function() {
    test.value(permAlone("a")).is(1);
  });

  it('all but consecutive', function() {
    test.value(permAlone("zzzzzzzz")).is(0);
    test.value(permAlone("aaab")).is(0);
  });

});
