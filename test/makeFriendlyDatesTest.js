// load Unit.js module
var test = require('unit.js');

// load function
var makeFriendlyDates = require('../src/makeFriendlyDates.js');


describe('makeFriendlyDatesTest', function() {

  it('same year, same month', function() {
    test.value(makeFriendlyDates(["2016-07-01", "2016-07-04"]))
        .is(["July 1st","4th"]);
  });

  it('less than one year gap, different months', function() {
    test.value(makeFriendlyDates(["2016-12-01", "2017-02-03"]))
        .is(["December 1st","February 3rd"]);
  });

  it('more than one year difference', function() {
    test.value(makeFriendlyDates(["2016-12-01", "2018-02-03"]))
        .is(["December 1st, 2016","February 3rd, 2018"]);
  });

  it('same year, different months', function() {
    test.value(makeFriendlyDates(["2017-03-01", "2017-05-05"]))
        .is(["March 1st, 2017","May 5th"]);
  });

  it('same day', function() {
    test.value(makeFriendlyDates(["2018-01-13", "2018-01-13"]))
        .is(["January 13th, 2018"]);
  });

  it('364 day difference (consecutive year, same month)', function() {
    test.value(makeFriendlyDates(["2022-09-05", "2023-09-04"]))
        .is(["September 5th, 2022","September 4th"]);
  });

  it('exactly one year difference', function() {
    test.value(makeFriendlyDates(["2022-09-05", "2023-09-05"]))
        .is(["September 5th, 2022","September 5th, 2023"]);
  });

});
