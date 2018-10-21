const events = require("events");

let ev;
module.exports.createEvents = function () {
    ev = new events.EventEmitter();

    // setTimeout(()=>{
    //     ev.emit("data", "First data");
    
    // })
    return ev;
}

process.nextTick(() => {
        ev.emit("data", "First data");
});

let counter = 0;
setInterval(() => {
    ev.emit("data", "next data is " + (++counter));

    if(counter===5){
        ev.emit("error","End the process");
    }
}, 1000);