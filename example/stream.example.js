const fs = require('fs');
var path = require('path');
var bigfile = path.resolve(__dirname, '..', 'data','bigfile1.txt');

let counter = 1;
let reader = fs.createReadStream(bigfile,'utf8');

console.log("Started all");
reader.on('open',()=>{console.log('file reading in progress')});

reader.on('data',(data)=>{
    console.log(`*** Data Chunk  ${counter} ***`);
   // console.log(data);
    console.log(`*** Data Chunk End ${counter} ***`);
    ++counter;
});

reader.on('end',()=>{console.log('completed')});

reader.on('error',(err)=>{
    console.log("Got error on stream",err);
});

