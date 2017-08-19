
# roundToStep v1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Round a number to the nearest given multiple (also known as a "step").

```coffee
roundToStep = require "roundToStep"

# Round to the nearest multiple of 0.5
roundToStep 0.7, 0.5 # => 0.5

# Round to the nearest multiple of 5
roundToStep 13.2, 5 # => 15

# The result is rounded to avoid imprecise decimals
roundToStep 100.6, 0.015 # => 100.605
```

The last example demonstrates the following problem with floating point math.
Using `Math.round(100.6 * 0.015) / 0.015` to round to the nearest multiple
of `0.015` ends up returning `100.60499999999999` due to how fractions are
represented in binary. This package will count the decimals of the step
and round the result to get the same number of decimals.

So `100.60499999999999` becomes `100.605` because `0.015` has 3 decimals.
