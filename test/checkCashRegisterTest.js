// load Unit.js module
var test = require('unit.js');

// load function
var checkCashRegister = require('../src/checkCashRegister.js');


describe('checkCashRegisterTest', function() {

  it('output type: array', function() {
    test.given(price = 19.50, cash = 20.00,
               cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
                      ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
                      ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
        .array(checkCashRegister(price, cash, cid))
  });

  it('output type: string', function() {
    test.given(price = 19.50, cash = 20.00,
               cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
                      ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
                      ["TWENTY", 0], ["ONE HUNDRED", 0]])
        .string(checkCashRegister(price, cash, cid))

    test.given(price = 19.50, cash = 20.00,
               cid = [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0],
                      ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
                      ["TWENTY", 0], ["ONE HUNDRED", 0]])
        .string(checkCashRegister(price, cash, cid))
  });

  it('general asserts', function() {
    test.given(price = 19.50, cash = 20.00,
               cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
                      ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
                      ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
        .value(checkCashRegister(price, cash, cid)).is([["QUARTER", 0.50]]);

    test.given(price = 3.26, cash = 100.00,
               cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
                      ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
                      ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
        .value(checkCashRegister(price, cash, cid))
        .is([["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00],
             ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20],
             ["PENNY", 0.04]]);
  });

  it('obvious insufficient funds', function() {
    test.given(price = 19.50, cash = 20.00,
               cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
                      ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
                      ["TWENTY", 0], ["ONE HUNDRED", 0]])
        .value(checkCashRegister(price, cash, cid)).is("Insufficient Funds");
  });

  it('unsufficient funds due to lack of exact change', function() {
    test.given(price = 19.50, cash = 20.00,
               cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
                      ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0],
                      ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
        .value(checkCashRegister(price, cash, cid)).is("Insufficient Funds");
  });

  it('closed', function() {
    test.given(price = 19.50, cash = 20.00,
               cid = [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0],
                      ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
                      ["TWENTY", 0], ["ONE HUNDRED", 0]])
        .value(checkCashRegister(price, cash, cid)).is("Closed");
  });

});
