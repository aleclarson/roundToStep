function roundToStep(n, step) {
  // Calculate the number of decimals in our step.
  let p = 0
  if (step % 1) {
    const s = String(step)
    p = s.length - s.indexOf('.') - 1
  }

  // Perform naïve rounding.
  n = Math.round(n / step) * step

  // Work some magic to prevent inexact decimals.
  // eg: roundToStep(100.6, 0.015) => 100.6 (instead of 100.60499999999999)
  if (p) {
    const q = Math.pow(10, p)
    return Math.round(q * n + q / 1e16) / q
  }

  return n
}

module.exports = roundToStep
