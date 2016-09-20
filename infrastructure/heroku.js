var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator.export('bookinservice').then(function (result) {
    console.log(result);
});
