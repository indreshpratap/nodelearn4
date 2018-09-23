const fs = require('fs');
const path = require('path');


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
fs.readFile('testqq.txt', 'utf8', function(err, data) {
    if (err) {
        console.log("got error", err);
    } else {
        console.log("Callback executed");
        console.log(data);
    }


});


console.log("***Async call completed***");




fs.readFile(path.resolve(__dirname, 'public', "one.txt"),
    "utf8",
    function(err1, data1) {
        console.log("First reading completed");

        if (!err1) {
            fs.readFile(path.resolve(__dirname, 'public', "two.txt"),
                "utf8",
                function(err2, data2) {
                    if (!err2) {
                        console.log("First data is: ", data1);
                        console.log("First data is: ", data2);

                    } else {
                        console.warn("Failed at two");

                    }
                });

        } else {
            console.warn("Failed at two");

        }

    });

console.log("This End");


fs.readFile('index.html', 'utf8', function(err, data) {
    if (err) {
        console.log("got error", err);
    } else {
        console.log("Callback executed");
        //console.log(data);
    }


});

let length = 1000000000;
for (let i = 0; i <= length; i++) {
    if (i === 0) {
        console.log("Loop started");

    } else if (i === length) {
        console.log("loop completed");

    }
}

// fs.ex