const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const bindApiRoutes = require('./modules/api.routes');
// create instance of express app
let app = express();

app.use(bodyParser.json());
nunjucks.configure(path.resolve(__dirname,'views'), {
    autoescape: true,
    express: app,
    noCache: true
});

//allow static resources to be served by express it self.
app.use(express.static(path.resolve(__dirname,'public')));


// Routing
app.get('/', (request, response) => {
    response.render('index.html');
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