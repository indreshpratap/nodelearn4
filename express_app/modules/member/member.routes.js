var router = require('express').Router();

var ctrl = require('./member.controller');

router.get('/save',ctrl.saveUser);
router.get('/fetch',ctrl.fetchUser);

module.exports = router;