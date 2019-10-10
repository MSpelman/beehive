const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    beeId: {
        type: Number,  // could also be a Schema.ObjectId that ref's the Bee collection
        required: "beeId required"
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    pollen: {
        type: Number,
        required: "pollen required"
    }
});    

mongoose.model('Visit', VisitSchema);