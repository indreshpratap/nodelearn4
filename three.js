// adding prooperty to module.exports which is by default a blank object {}

var a = {};

module.exports.print = function(){
    console.log("Three print");
}

module.exports.loop = function(){
    console.log("Three loop");
}

module.exports.message = "This is three file";

function test(){
    
}

console.log(module.exports);


