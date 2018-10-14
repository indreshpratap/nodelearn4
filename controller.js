exports.index = function(req, res) {
    res.send("Hi There fdsfjslkjsf");
}

exports.about= function(req, res) {
    res.send("About page");
};

exports.jsonData= function(req, res) {
    res.json(getJson())
}

exports.hi= function(req, res) {

    var name = req.query.name;
    res.send("Hi " + (name || ''));
};


exports.abc = function getJson(){
    return {
        data: [
            { name: 'User 1' },
            { name: 'User 1344' },
            { name: 'User 1344' },
            { name: 'User 1344' },
            { name: 'User 1344' },
            { name: 'User 1344' },
        ]
    }
}