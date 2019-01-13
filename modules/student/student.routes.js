var controller = require('./student.controller');

var router = require('express').Router();

router.post('/save',controller.saveStudent);
router.get('/fetch',controller.fetchStudents);

module.exports = router;