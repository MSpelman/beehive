const mongoose = require('mongoose');

module.exports = function() {
    const db = mongoose.connect("mongodb://localhost/beehive");

    require('../models/visit');
    
    return db;
}