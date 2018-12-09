var apiRouter = require('express').Router();


var memberRoutes = require('./member/member.routes');
var adminRoutes = require('./admin/admin.routes');

module.exports = function bindApiRoutes(app) {
   
    apiRouter.use('/member',memberRoutes);
    apiRouter.use('/admin',adminRoutes);

    app.use('/api',apiRouter);
}