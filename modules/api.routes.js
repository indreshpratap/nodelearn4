var apiRouter = require('express').Router();

var logger= require('../middlewares/logging.middleware');

var memberRoutes = require('./member/member.routes');
var adminRoutes = require('./admin/admin.routes');
var settingRoutes = require('./settings/settings.routes');

module.exports = function bindApiRoutes(app) {
    apiRouter.use('/member',logger.memberLogger, memberRoutes);
    apiRouter.use('/admin', adminRoutes);
    apiRouter.use('/settings',logger.settingsLogger,logger.memberLogger,settingRoutes);

    app.use('/api',apiRouter);
}