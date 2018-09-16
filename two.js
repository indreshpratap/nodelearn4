var one = require("./one");
var three = require('./three');
var four = require('./four');

console.log("Two js",one.hello());
console.log("Two js",one.hi());
console.log("Two js",one.msg());

three.loop();
three.print();

four.test();
four.test2();
// this line will not work
// console.log(four());