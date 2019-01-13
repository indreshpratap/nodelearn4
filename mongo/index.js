var mongoose = require('mongoose');

exports.init = function() {
    console.log(process.env.MONGO_DB_HOST);
    mongoose.connect(process.env.MONGO_DB_HOST)
    .then(()=>{
        console.log('MongoDB Connected');
    }).catch(err=>console.warn('Failed to connect',err));
} 