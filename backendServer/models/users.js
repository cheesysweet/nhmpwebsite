const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true}
})

module.exports = mongoose.model('users', userSchema);