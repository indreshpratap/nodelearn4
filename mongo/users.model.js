const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    role: String,
    active: Boolean
});


var User = mongoose.model('users', userSchema);

module.exports = User;