const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    volunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
    status: { 
        type: String, 
        enum: ['Applied', 'Approved', 'Rejected', 'Completed'], 
        default: 'Applied' 
    },
    checkInTime: Date,
    checkOutTime: Date,
    locationData: { // For storing lat/long on check-in
        lat: Number,
        lng: Number
    }
});

module.exports = mongoose.model('Application', ApplicationSchema);