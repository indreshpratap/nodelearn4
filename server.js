const express = require('express');

const ctrl = require('./controller');
const app = express();
ctrl.abc();

// app.get("/",ctrl.index);

// app.get("/about",ctrl.about);

app.get("/list",ctrl.jsonData);

app.get("/hi",ctrl.hi);
app.post("/hi",ctrl.hi);


app.listen(3000,()=>{
    console.log("Your app is running at 3000");
    
});