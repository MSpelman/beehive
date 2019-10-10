const mongoose = require('mongoose');
const Visit = mongoose.model('Visit');

module.exports = function(app){
    app.post('/api/visits', function(req, res){

        // Store the supplied visit data
        const newVisit = new Visit(req.body);
        newVisit.save((err) => {
            if (err) {
                return res.status(400).send({
                    message: err.message
                })
            } else {
                res.status(201).json({'id':newVisit.id})
            }
        });
    });
}
