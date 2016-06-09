/**
 * Friendly Date Ranges
 * ====================
 *
 * Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
 *
 * The friendly display should use month names instead of numbers and ordinal dates instead of
 * cardinal (1st instead of 1).
 *
 * Do not display information that is redundant or that can be inferred by the user: if the date
 * range ends in less than a year from when it begins, do not display the ending year.
 *
 * Additionally, if the date range begins in the current year (i.e. it is currently the year 2016)
 * and ends within one year, the year should not be displayed at the beginning of the friendly
 * range.
 *
 * If the range ends in the same month that it begins, do not display the ending year or month.
 *
 * Examples:
 *
 *     makeFriendlyDates(["2016-07-01", "2016-07-04"])
 *         should return
 *     ["July 1st","4th"]
 *
 *     makeFriendlyDates(["2016-07-01", "2018-07-04"])
 *         should return
 *     ["July 1st, 2016", "July 4th, 2018"]
 *
 */


/* ======== CONSTANTS ======== */
// time metrics
var MINUTES_PER_YEAR = 525600
var SECONDS_PER_MINUTES = 60
var MILLISECONDS_PER_SECONDS = 1000
var MILLISECONDS_PER_YEAR = MILLISECONDS_PER_SECONDS * SECONDS_PER_MINUTES * MINUTES_PER_YEAR;
var MONTH_INDEX_LOOKUP = {
  1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June",
  7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"
}


/* ======== HELPERS ======== */
function toCardinal(n) {
  var nStr = n.toString(),
      tenth = nStr[nStr.length - 1],
      leading = nStr.substr(0, nStr.length - 1),
      rep;
  if (n === 11) { rep = "11th"; }
  else if (n === 12) { rep = "12th"; }
  else if (n === 13) { rep = "13th"; }
  else if (tenth === "1") { rep = leading + tenth + "st"; }
  else if (tenth === "2") { rep = leading + tenth + "nd"; }
  else if (tenth === "3") { rep = leading + tenth + "rd"; }
  else { rep = leading + tenth + "th"; }
  return rep;
}

function friendlifyDate(date, dispYear, dispMonth) {
  // default values
  dispYear = (dispYear === false) ? false : true
  dispMonth = (dispMonth === false) ? false : true

  // convert to string representations
  var yearRep  = date.getFullYear(),
      monthRep = MONTH_INDEX_LOOKUP[date.getMonth() + 1],
      dayRep = toCardinal(date.getDate()),
      fullRep = "";

  if (dispMonth) { fullRep += monthRep + " "; }
  fullRep += dayRep;
  if (dispYear) { fullRep += ", " + yearRep; }

  return fullRep;
}


/* ========- MAIN ======== */
function makeFriendlyDates(arr) {
  var dates = arr.map(function(d) { return new Date(d); }),
      start = dates[0],
      end   = dates[1],
      timeDiff = (end - start) / MILLISECONDS_PER_YEAR;   // in a year

  // handle same day
  if (timeDiff === 0) {
    return [friendlifyDate(start)];
  }

  // handle differences of at least 1 year
  if (timeDiff >= 1) {
    return [friendlifyDate(start), friendlifyDate(end)];
  }

  // less than one year differences
  var startYear  = start.getFullYear(),
      endYear    = end.getFullYear(),
      startMonth = start.getMonth() + 1,
      endMonth   = end.getMonth() + 1;

  // same month
  if (startMonth == endMonth) {
    if (startYear == endYear)
      return [friendlifyDate(start, false, true),
              friendlifyDate(end, false, false)];
    else
      return [friendlifyDate(start), friendlifyDate(end, false, true)];
  }

  // different months, consecutive years
  if (startYear === endYear) {
    return [friendlifyDate(start), friendlifyDate(end, false, true)];
  }

  // finally, different months, same year
  return [friendlifyDate(start, false, true),
          friendlifyDate(end, false, true)];
}

module.exports = makeFriendlyDates;
