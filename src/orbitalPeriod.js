/**
 * Map the Debris
 * ==============
 *
 * Return a new array that transforms the element's average altitude into their orbital periods.
 *
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 *
 * You can read about orbital periods on wikipedia.
 *
 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
 *
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 *
 */


/* ======== Constants ======== */
var GM = 398600.4418;  // km^3 * s^2
var EARTH_RADIUS = 6367.4447; // km


function orbitalPeriod(arr) {
  return arr.map(function(obj) {
    var r3 = Math.pow(EARTH_RADIUS + obj.avgAlt, 3);
    var op = Math.round(2 * Math.PI * Math.sqrt(r3 / GM));
    return {
      name: obj.name,
      orbitalPeriod: op
    };
  });
}

module.exports = orbitalPeriod;
