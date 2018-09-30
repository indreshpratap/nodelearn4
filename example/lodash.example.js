const _ = require('lodash');

var dupes = [1,2,3,4,4,3,3,3,2,2];

console.log("unique",_.uniq(dupes));

var items = [
    {id:1, name:'fsdf'},
    {id:1, name:'dfssfs'},
    {id:1, name:'fds'},
    {id:1, name:'fsffsdsdffdf'},
    {id:2, name:'this is secon'},

]

console.log( _.groupBy(items,'id'));

