var apiRouter = require('express').Router();


var memberRoutes = require('./member/member.routes');
var adminRoutes = require('./admin/admin.routes');
var settingRoutes = require('./settings/settings.routes');

module.exports = function bindApiRoutes(app) {
    apiRouter.use('/member', memberRoutes);
    apiRouter.use('/admin', adminRoutes);
    apiRouter.use('/settings', settingRoutes);

    app.use('/api',apiRouter);
}