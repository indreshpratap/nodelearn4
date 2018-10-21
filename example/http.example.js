const http = require('http');
const url = require("url");
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');
let router = {};

router["/"] = function (req, res) {
    res.write(fs.readFileSync(path.resolve(__dirname, "..", "index.html")));
    res.end();
}
router["/about"] = function (req, res) {
    res.write("about page");
    res.end();
}

router["/hello"] = function (req, res) {
    res.write("hello " + req.params.name);
    res.write("\nAddress " + req.params.addr);
    res.end();
}

router["/list"] = function (req, res) {
    res.write(JSON.stringify({ name: 'Indresh', address: "Noida" }));
    res.end();
}


var server = http.createServer((request, response) => {
    let reqUrl = request.url;
    let parsedUrl = url.parse(reqUrl);
    let path = parsedUrl.pathname;
    if (parsedUrl.query) {
        request.params = querystring.parse(parsedUrl.query);
    }
    console.log(parsedUrl);

    console.log("url= " + reqUrl);
    if (router[path]) {
        router[path](request, response);
    } else {
        response.write('not found');
        response.end();
    }
});


server.listen(3000, () => {
    console.log("server running");

});
