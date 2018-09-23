var path = require('path');
console.log(__dirname);
console.log(__filename);

console.log(path.resolve(__dirname,"..",".."));
console.log(path.resolve(__dirname,"..","..","fdsfs","sfdsdf.js"));

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.normalize(__dirname+"fdsfsdfs/fdsfsf/../.././/..///"));


