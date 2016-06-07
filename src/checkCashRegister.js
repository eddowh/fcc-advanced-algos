/**
 * Exact Change
 * ============
 *
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the
 * first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the
 * third argument.
 *
 * cid is a 2D array listing available currency.
 *
 * Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the
 * string "Closed" if cash-in-drawer is equal to the change due.
 *
 * Otherwise, return change in coin and bills, sorted in highest to lowest order.
 *
 */


var CASH_VALUE_LOOKUP = [
  { name: 'ONE HUNDRED', val: 100.00 },
  { name: 'TWENTY',      val: 20.00  },
  { name: 'TEN',         val: 10.00  },
  { name: 'FIVE',        val: 5.00   },
  { name: 'ONE',         val: 1.00   },
  { name: 'QUARTER',     val: 0.25   },
  { name: 'DIME',        val: 0.10   },
  { name: 'NICKEL',      val: 0.05   },
  { name: 'PENNY',       val: 0.01   }
];


/**
 * Solution courtesy of FreeCodeCamp.
 * See <https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Exact-Change>
 */
function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  // Handle exact change
  if (register.total === change) { return "Closed"; }

  // Handle obvious insufficient funds
  if (register.total < change) { return "Insufficient Funds"; }

  // Starting from biggest cash type available
  var changeArr = CASH_VALUE_LOOKUP.reduce(function(acc, curr) {
    var value = 0;  // amount used by this type of cash
    while (register[curr.name] > 0 && change >= curr.val) {
      register[curr.name] -= curr.val;  // deduct from register
      value += curr.val;  // add amount of change used by this type of cash
      change -= curr.val;  // one step closer to giving back change to customer
      // round to two decimal places - efficiency unaccounted for
      change = parseFloat(change.toFixed(2));
    }
    // append to accumulator arr only if this type of cash was used
    if (value > 0) { acc.push([curr.name, value]); }
    return acc;
  }, []);

  // no change combinations available OR there is leftover change
  if (changeArr.length < 1 || change > 0) { return "Insufficient Funds"; }

  return changeArr;
}

module.exports = checkCashRegister;
