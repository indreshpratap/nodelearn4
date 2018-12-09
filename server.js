const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bindApiRoutes = require('./modules/api.routes');
// create instance of express app
let app = express();

nunjucks.configure(path.resolve(__dirname,'views'), {
    autoescape: true,
    express: app,
    noCache: true
});

//allow static resources to be served by express it self.
app.use(express.static(path.resolve(__dirname,'public')));


// Routing
app.get('/', (request, response) => {

    let que = request.query;
    
    response.render('index.html', {title:'Express App',author: que.author?que.author:'Indresh', user:{name:'Tst'}});
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

app.post("/product/:id/review/:rid", (req, res) => {
    let id = req.params.id;
    let rid = req.params.rid;
    res.send(`Product review for rid: ${rid} and id is ${id}`);
});


bindApiRoutes(app);


// Not found or global
// handler if nothing matches then request will come here
app.get("**", (req, res) => {
    res.status(404).send(`Requested page: ${req.url} not found`);
})



// listen to specific port
app.listen(3000, () => {
    console.log('Express server running at 3000');
});