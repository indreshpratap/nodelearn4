const fs = require('fs');


// sync function call
// use try catch to capture error
try {
    var data = fs.readFileSync('test.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.log("Failed to read file");
}

console.log("***Sync call completed***");

// async function
// passing the callback
fs.readFile('testqq.txt','utf8',function(err,data){
    if(err){
        console.log("got error", err);
    }else {
         console.log("Callback executed");
    console.log(data);
    }
   
    
});

console.log("***Async call completed***");