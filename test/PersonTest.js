// load Unit.js module
var test = require('unit.js');

// load function
var Person = require('../src/Person.js');


describe('PersonTest', function() {

  // lobal variable for testing
  var bob = new Person('Bob Ross');

  it('accessible properties / methods', function() {
    test.value(Object.keys(bob).length).is(6);
  });

  it('type checking: Person', function() {
    test.assert(bob instanceof Person);
  });

  it('private variables', function() {
    test.value(bob.firstName).is(undefined)
        .value(bob.lastName).is(undefined);
  });

  it('getter methods', function() {
    test.value(bob.getFirstName()).is('Bob')
        .value(bob.getLastName()).is('Ross')
        .value(bob.getFullName()).is('Bob Ross');
  });

  it('setter methods', function() {
    test.given(firstAndLast = 'Bob Ross', bob = new Person(firstAndLast))
        .then('set first name', function() { bob.setFirstName("Haskell"); })
        .value(bob.getFullName()).is('Haskell Ross')
        .then('set last name', function() { bob.setLastName("Curry"); })
        .value(bob.getFullName()).is('Haskell Curry')
        .then('set full name', function() { bob.setFullName("Haskell Curry"); })
        .value(bob.getFullName()).is('Haskell Curry')
        .value(bob.getFirstName()).is('Haskell')
        .value(bob.getLastName()).is('Curry');
  });

});
