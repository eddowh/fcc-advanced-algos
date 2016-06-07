// load Unit.js module
var test = require('unit.js');

// load function
var updateInventory = require('../src/updateInventory.js');


describe('updateInventoryTest', function() {

  it('type checking: array', function() {
    test.array(updateInventory([], []));
  });

  it('check array length', function() {
    test.given(arr1 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
               arr2 = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
        .value(updateInventory(arr1, arr2).length)
        .is(6);
  });

  it('general asserts', function() {
    test.given(arr1 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
               arr2 = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
        .value(updateInventory(arr1, arr2))
        .is([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]);

    test.given(arr1 = [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
               arr2 = [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])
        .value(updateInventory(arr1, arr2))
        .is([[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]);
  });

  it('empty arrays', function() {
    test.given(arr1 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
               arr2 = [])
        .value(updateInventory(arr1, arr2))
        .is([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]);

    test.given(arr1 = [],
               arr2 = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
        .value(updateInventory(arr1, arr2))
        .is([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]);
  });


});
