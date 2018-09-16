// here exports is just an alias of module.exports 
//you can not assigned a value direcly to it
exports.test = function(){
    console.log("test 1");
    
}

exports.test2 = function(){
 console.log("test 2");
}


// it will not work
exports = function(){
    console.log("shold not work");
    
}