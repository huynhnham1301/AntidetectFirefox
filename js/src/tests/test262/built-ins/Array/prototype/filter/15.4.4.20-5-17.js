// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-17
description: Array.prototype.filter - the JSON object can be used as thisArg
---*/

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === JSON;
        }

        var newArr = [11].filter(callbackfn, JSON);

assert.sameValue(newArr[0], 11, 'newArr[0]');
assert(accessed, 'accessed !== true');

reportCompare(0, 0);
