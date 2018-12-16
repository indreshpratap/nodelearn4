exports.settingsLogger = function(req,res,next){
    console.log('Settings Url: ',req.url, req.whichLogger);
    req.whichLogger = 'Settings Logger';
   // res.json({'msg':'Intercepted here'});
    next("route");
}

exports.memberLogger = function(req,res,next){
    console.log('Member Url: ',req.url,req.whichLogger);
    req.whichLogger = 'Member Logger';
   // res.json({'msg':'Intercepted here'});
   next();
}