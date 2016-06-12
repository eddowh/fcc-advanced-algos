// load Unit.js module
var test = require('unit.js');

// load function
var orbitalPeriod = require('../src/orbitalPeriod.js');


describe('orbitalPeriodTest', function() {

  it('general asserts', function() {
    test.given(arr = [{name : "sputnik", avgAlt : 35873.5553}])
        .value(orbitalPeriod(arr)).is([{name: "sputnik", orbitalPeriod: 86400}]);
    test.given(arr = [{name: "iss", avgAlt: 413.6},
                      {name: "hubble", avgAlt: 556.7},
                      {name: "moon", avgAlt: 378632.553}])
        .value(orbitalPeriod(arr)).is([{name : "iss", orbitalPeriod: 5557},
                                       {name: "hubble", orbitalPeriod: 5734},
                                       {name: "moon", orbitalPeriod: 2377399}]);
  });

});
