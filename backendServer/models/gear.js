const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var gearSchema = new Schema({
    Name: {type: String, required: true},
    Type: String,
    Amount: {type: Number, required: true},
    RestockLevel: Number,
    ThresholdLevel: Number
})

module.exports = mongoose.model('gear', gearSchema);