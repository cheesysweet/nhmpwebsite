const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var clothSchema = new Schema({
    Name: {type: String, required: true},
    Type: String,
    Amount: {type: Number, required: true},
    RestockLevel: Number,
    ThresholdLevel: Number
})

module.exports = mongoose.model('clothes', clothSchema);