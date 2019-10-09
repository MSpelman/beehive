module.exports = function(app){
    app.post('/api/visits', function(req, res){

        // Store the supplied visit data
        app.visits.push(req.body);

        var visitId = app.visits.length;

        res.status(201).json({'id':visitId});
    });
}
