module.exports = exports = function (num) {
  return (num < 10) : "0" + num : "" + num;
}