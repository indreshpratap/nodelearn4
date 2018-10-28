const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
// create instance of express app
let app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

//allow static resources to be served by express it self.
app.use(express.static(path.resolve(__dirname,'public')));

app.get('/', (request, response) => {
    let data = {title:'Express App',author:'Indresh'};
    response.render('index.html',data);
});

app.get('/home', (req, res) => {
    res.send('this is home page');
});
app.get('/about', (req, res) => {
    res.render('about.html');
});

// send json
app.get('/list', (req, res) => {
    res.json({ name: 'Indresh', address: 'Noida' });
});

// get query parameters ?name=Test
app.get('/say-hello', (req, res) => {
    let query = req.query;
    res.send(`Hi ${query.name}`);
});

app.get("/product", (req, res) => {
    res.send("Product listing ");
});
//Path Variables or Params
app.get("/product/:id", (req, res) => {
    let id = req.params.id;
    res.send("Product details for id: " + id);
});

app.get("/product/:id/review/:rid", (req, res) => {
    let id = req.params.id;
    let rid = req.params.rid;
    res.send(`Product review for rid: ${rid} and id is ${id}`);
});


// Not found or global
// handler if nothing matches then request will come here
app.get("**", (req, res) => {
    res.status(404).send(`Requested page: ${req.url} not found`);
})



// listen to specific port
app.listen(3000, () => {
    console.log('Express server running at 3000');
});