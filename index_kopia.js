
// var http = require('http');
// var server = http.createServer(function (req, res) {
//     res.end('hello world');
// });
//
// server.listen(3000, function () {
//     console.log("When this callback is invoked our server is listening on port: " + 3000);
// });

var express = require('express');
var assert = require('assert');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/book_inventory_service';


app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log("Incoming req " + new Date());
    next();
});

// app.use(function(err, req, res, next) {
//     if (req.xhr) {
//         res.status(500).send({ error: 'Something failed!' });
//     } else {
//         next(err);
//     }
// });

app.get('/', function(req, res, next) {
    //throw new Error;
    console.log("Incoming req / only " + new Date());
    next();

}, function (req, res) {
    res.send('Hello World!');
});

app.get('/stock', function(req, res) {
    MongoClient.connect(mongoUrl, function(err, db) {
        db.collection('books').find({}).toArray(function(err, results) {
            res.json(results);
        });
    });

});

app.post('/stock', function(req, res, next) {
    // res.json({"isbn": req.body.isbn, "count": req.body.count})

    MongoClient.connect(mongoUrl, function(err, db) {
        db.collection('books').updateOne(
            {isbn: req.body.isbn},
            {
                isbn: req.body.isbn,
                count: req.body.count
            },
            {upsert: true},
            function (err, result) {
            });
    });

    next();
});

module.exports = app;
