var express = require('express');
var app = express();

var path = require('path');

app.set('port', (process.env.PORT || 5000));


app.get('/*', function(request, response){
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, './public', file));

});


app.listen(app.get('port'), function (){
    console.log("App is running on port:", app.get('port'));
});

var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function (err) {
    if (err) {
        console.log('mongodb connection error', err);
    } else {
        console.log('mongodb connection successful');
    }
});

MongoDB.once('open', function () {
    console.log('mongodb connection open');
});


module.exports = app;
