'use strict';

module.exports = exports = function (num) {

  /* If not a number OR the NaN value return empty string */
  if (typeof num !== "number" || num !== num) return "";

  return (num > 0 && num < 10) ? "0" + num : "" + num;
}