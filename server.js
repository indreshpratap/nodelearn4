const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
var session = require("express-session");
const FileStore = require('session-file-store')(session);
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const bindApiRoutes = require('./modules/api.routes');
// create instance of express app
let app = express();

app.use(session({
    store: new FileStore({}),
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }

}));

app.use(passport.initialize()); // use passport middleware
app.use(passport.session());  // tell passport to use configured session
passport.serializeUser(function (user, done) {
    done(null, user);
    // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function (user, done) {
    done(null, user);
});


passport.use(new LocalStrategy(function (username, password, done) {
    if (username === 'admin' && password === 'admin') {
        done(null, { id: 1, name: 'Admin', role: 'admin' }); // authenticated
    } else if (username === 'admin' && password !== 'admin') {
        done(null, null, { message: "Invalid username or password!" });  // not authenticated
    }

    if (username === 'user' && password === 'user') {
        done(null, { id: 2, name: 'User 1', role: 'user' }); // authenticated
    } else if (username === 'user' && password !== 'user') {
        done(null, null, { message: "Invalid username or password!" });  // not authenticated
    }
}));




nunjucks.configure(path.resolve(__dirname, 'views'), {
    autoescape: true,
    express: app,
    noCache: true
});


//parse json payload and set in req.body
app.use(bodyParser.json());

//allow static resources to be served by express it self.
app.use(express.static(path.resolve(__dirname, 'public')));


// Routing
app.get('/', (request, response) => {
    response.render('index.html');
});

app.post("/dologin", (req, res) => {
    //check config/passport-config.js
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            res.status(500).send('Inernal server error');
        }
        else if (!user) {
            res.status(500).send(info.message);
        } else {
            // calling login function added by passport in our req
            req.logIn(user, function (err) {
                if (err) {
                    res.status(500).send('Failed to save in session');
                } else {
                    res.json(user);
                }
            })
        }
    })(req, res);
});

app.get("/error", (req, res) => {
    res.status(500).send("Error");
});

bindApiRoutes(app);


// Not found or global
// handler if nothing matches then request will come here
app.get("**", (req, res) => {
    res.status(404).send(`Requested page: ${req.url} not found`);
})

// error handler
app.use(function (err, req, res, next) {
    console.log('Final', err);
    res.json({ failed: true });

})

// listen to specific port
app.listen(3000, () => {
    console.log('Express server running at 3000');
});