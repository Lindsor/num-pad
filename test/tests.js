'use strict';

const mocha = require("mocha");

const assert = require("chai").assert;

const pad = require("../index");

describe("num-pad", function() {

  it("should return empty string for empty call", function() {

    assert.equal(pad(), "");

  });

  it("should return empty string for non numeric value", function() {
    const nonNumericValues = [
      true,
      false,
      NaN,
      null,
      undefined,
      "hello"
    ];

    nonNumericValues.forEach(nonNumeric => {
      assert.equal(pad(nonNumeric), "");
    });

  });

  it("should return empty string for NaN call", function() {

    assert.equal(pad(NaN), "");

  });

  it("should return '10' if 10 is passed in", function() {

    assert.equal(pad(10), "10");

  });

  it("should return '01' if 1 is passed in", function() {

    assert.equal(pad(1), "01");

  });

  it("should return '0' if 0 is passed in", function() {

    assert.equal(pad(0), "0");

  });

  it("should return the same value if negative number passed in", function() {
    var negativeNumbers = [
      -1,
      -4,
      -0,
      -700
    ];

    negativeNumbers.forEach(neg => {
      assert.equal(pad(neg), neg);
    });

  });

});