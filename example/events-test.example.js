const myevent = require('./events.example');


let e = myevent.createEvents();


e.on('error',(err)=>{
    console.log("Error occured",err);
});
e.on('data', (d) => {
    console.log("Received data", d);
});

setTimeout(() => {
    e.on('data', (d) => {
        console.log("Received data22b", d);
    });
    
}, 3000);


setTimeout(()=>{
    console.log("After 7 sec");
},7000)
