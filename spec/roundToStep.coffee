
roundToStep = require ".."

describe "roundToStep()", ->

  it "can round by fractions", ->
    x = roundToStep 14.5, 0.6
    expect(x).toBe 14.4

  it "can round by integers", ->
    x = roundToStep 150, 100
    expect(x).toBe 200

  it "prefers the greater value when rounding 0.5", ->

    x = roundToStep 1.5, 1
    expect(x).toBe 2

    x = roundToStep -1.5, 1
    expect(x).toBe -1

  # NOTE: I recommend using `roundValue` for decimal rounding.
  it "rounds 1.005 to a step of 0.01 incorrectly", ->
    x = roundToStep 1.005, 0.01
    expect(x).toBe 1

  it "rounds to the decimal places of the step", ->
    x = roundToStep 100.6, 0.015
    expect(x).toBe 100.605

