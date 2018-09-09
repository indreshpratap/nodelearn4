console.log(module.exports);

// module.exports = function hello(){
//     return 'Hello';
// }

message()

function message(){
    return "message";
}

module.exports = {
    hello:function(){
        return 'Hello';
    },
    hi: function(){
        return 'Hi';
    },
 msg: message
}

console.log(module.exports.hello());

//console.log("One.js ",hello());
