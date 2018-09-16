const os = require('os');


console.log(os.arch());

//console.log(os.cpus());

const platform = os.platform();

if (platform === 'win32') {
    console.log("its windows machine");
} else if (platform === 'darwin') {
    console.log('Is mac os');
}

console.log(os.platform());

console.log(os.tmpdir());

console.log(os.freemem());