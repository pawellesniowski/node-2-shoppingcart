var mongoose = require('mongoose');
var Shema = mongoose.Shema;

var userShema = new Shema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userShema);
