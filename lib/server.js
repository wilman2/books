var app = require('./app.js')(require('./stockRepository'), require('./auth'));
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});