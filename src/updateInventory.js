/**
 * Inventory Update
 * ================
 *
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh
 * delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be
 * found, add the new item and quantity into the inventory array. The returned inventory array
 * should be in alphabetical order by item.
 *
 */


function sortInventoryArray(arr) {
  return arr.slice().sort(function(a, b) {
    return b[1] < a[1];
  });
}


function updateInventory(arr1, arr2) {
  // handle empty arrays
  if (arr1.length === 0) { return sortInventoryArray(arr2); }
  if (arr2.length === 0) { return sortInventoryArray(arr1); }

  // copy
  var res = arr1.slice();
  var supp = arr2.slice();

  // convert arr2 to object
  var arrDict = {};
  for (var i in supp) {
    var el = supp[i],
        name = el[1],
        value = el[0];
    arrDict[name] = {
      index: i,
      value: value
    };
  }

  // add value and remove elements from supp (arr2)
  // for concatenating and sorting
  for (var i in res) {
    var key = res[i][1];
    if (arrDict[key]) {
      res[i][0] += arrDict[key].value;
      supp.splice(arrDict[key].index, 1);
    }
  }

  return sortInventoryArray(res.concat(supp));
}

module.exports = updateInventory;
