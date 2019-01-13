var apiRouter = require('express').Router();

var logger = require('../middlewares/logging.middleware');

var memberRoutes = require('./member/member.routes');
var adminRoutes = require('./admin/admin.routes');
var settingRoutes = require('./settings/settings.routes');
var studentRoutes = require('./student/student.routes');

function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.send(403).send('Unauthorized');
    }
}

module.exports = function bindApiRoutes(app) {
    apiRouter.use('/member', logger.memberLogger, memberRoutes);
    apiRouter.use('/admin', adminRoutes);
    apiRouter.use('/settings', logger.settingsLogger, logger.memberLogger, settingRoutes);
    apiRouter.use('/student', studentRoutes);
    app.use('/api', isAuth, apiRouter);
}