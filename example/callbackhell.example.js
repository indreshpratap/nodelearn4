var fs = require('fs');
var path = require('path');

var root = path.resolve(__dirname, '..', 'data');

fs.readFile(path.resolve(root, 'first.txt'), 'utf-8', (err, firstData) => {
    if (err) {
        console.warn(err);
    } else {
        fs.readFile(path.resolve(root, firstData), 'utf-8', (err, secondData) => {
            if (err) {
                console.warn(err);
            } else {
                fs.readFile(path.resolve(root, secondData), 'utf-8', (err, thirdData) => {
                    if (err) {
                        console.warn(err);
                    } else {
                        console.log(thirdData);
                    }
                });
            }
        });
    }
});