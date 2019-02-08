// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: 1. Evaluate Expression
es5id: 12.13_A3_T2
description: Evaluating string expression
---*/

// CHECK#1
try{
  throw "exception"+" #1";
}
catch(e){
  if (e!=="exception #1") $ERROR('#1: Exception === "exception #1"(operaton +). Actual:  Exception ==='+ e );
}

// CHECK#2
var b="exception"
var a=" #1";
try{
  throw b+a;
}
catch(e){
  if (e!=="exception #1") $ERROR('#2: Exception === "exception #1"(operaton +). Actual:  Exception ==='+ e );
}

reportCompare(0, 0);