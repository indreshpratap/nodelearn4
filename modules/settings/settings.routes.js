
var router = require('express').Router();

var roleCtrl = require('./controllers/roles.controller');
var sessionCtrl = require('./controllers/sessions.controller');

//roles controller
router.post('/save-role',roleCtrl.saveRole);
router.get('/get-roles',roleCtrl.getRoles);

//sessions
router.post('/save-session',sessionCtrl.saveSession);
router.get('/get-sessions',sessionCtrl.getSessions);



module.exports = router;