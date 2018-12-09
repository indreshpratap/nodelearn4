var db = require('../../../dao');
var { ok, apierror, notok } = require('../../../utils/api.util');

exports.saveRole = (req, res) => {
    let data = req.body;
    if (data.name) {
        db('roles').insert({ name: data.name,created_at:new Date() })
            .returning('*')
            .then(row => ok(res, row))
            .catch(error => apierror(res, error));
    } else {
        notok(res, 'Role name is required!');
    }
}

exports.getRoles = (req, res) => {
    db('roles').select()
    .then(roles => ok(res, roles));
}