var fs = require('fs');
var path = require('path');

var root = path.resolve(__dirname, '..', 'data');

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(root, filename), 'utf8', (err, data) => {
            if (err) { reject(err) } 
            else {
                resolve(data);
            }
        });
    });
}


readFilePromise('first.txt')
    .then((data) => readFilePromise(data), (err) => console.log("this is rejected", err))
    .then((data) => readFilePromise(data))
    //.then((data) => readFilePromise(data))
    .then((data) => console.log(data))
    .catch(err => console.log("catched error", err));


// async await example of same 

(async () => {
    try {
        let first = await readFilePromise('first.txt');
        let second = await readFilePromise(first);
        let third = await readFilePromise(second);
        console.log("With async", third);
    } catch (error) {
        console.warn("async error", error);
    }
})();