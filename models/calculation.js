var mongoose = require('mongoose');

var calculationSchema = new mongoose.Schema({
    name: String,
    score: Number,
    rank: Number,
    dateCompleted: Date
});

module.exports = mongoose.model('assignments', assignmentsSchema);