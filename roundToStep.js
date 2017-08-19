
var countDecimals = require('countDecimals');
var roundValue = require('roundValue');

function roundToStep(x, step) {
  var decs = countDecimals(step);
  if (decs) {
    return roundValue(Math.round(x / step) * step, decs);
  }
  return Math.round(x / step) * step;
}

module.exports = roundToStep;
