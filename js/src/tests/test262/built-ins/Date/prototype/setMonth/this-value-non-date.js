// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.prototype.setmonth
es6id: 20.3.4.25
description: >
  Behavior when "this" value is an Object without a [[DateValue]] internal slot
info: |
  1. Let t be ? thisTimeValue(this value).

  The abstract operation thisTimeValue(value) performs the following steps:

  1. If Type(value) is Object and value has a [[DateValue]] internal slot, then
     a. Return value.[[DateValue]].
  2. Throw a TypeError exception.
---*/

var setMonth = Date.prototype.setMonth;
var callCount = 0;
var arg = {
  valueOf: function() {
    callCount += 1;
    return 1;
  }
};
var args = (function() { return arguments; }());

assert.sameValue(typeof setMonth, 'function');

assert.throws(TypeError, function() {
  setMonth.call({}, arg);
}, 'ordinary object');

assert.throws(TypeError, function() {
  setMonth.call([], arg);
}, 'array exotic object');

assert.throws(TypeError, function() {
  setMonth.call(args, arg);
}, 'arguments exotic object');

assert.sameValue(callCount, 0, 'validation preceeds input coercion');

reportCompare(0, 0);
