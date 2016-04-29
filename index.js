module.exports = exports = function (num) {
  if (num >= 0) {
    return (num < 10 ? '0' : '') + num;
  } else {
    return (num > -10 ? '-0' : '-') + Math.abs(num);
  }
}
