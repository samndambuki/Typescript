"use strict";
//difference between null and undefined
//undefined is usually by default 
let variable;
function exampleFunction() { }
console.log(exampleFunction());
//null is ussually assigned 
let variable1 = null;
let user = null;
//loose equality operator 
//will return true 
console.log(null == undefined);
//strict equality operator
//evaluates false
console.log(null === undefined);
