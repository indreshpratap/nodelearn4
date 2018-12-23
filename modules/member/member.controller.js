var db = require('../../dao');

exports.saveUser = function (req, res) {
    db('users').insert({ name: 'Indresh', address: 'Noida', age: 30 })
        .returning()
    .then((newuser) => {
        res.json(newuser);
    }, (err) => { res.status(500).json({ error: err }) });

}

exports.fetchUser = function (req, res) {
   db('users').select().then(data=>res.json({data,views:req.session.views}));
}