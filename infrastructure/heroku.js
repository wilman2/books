var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator.export('bookinservice').then(function(result) {
    console.log(result);
});

var infrastructure = { name: 'bookinservice',
    organization: undefined,
    region: 'us',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: { MONGODB_URI: 'mongodb://heroku_c2ng6dvz:o5ga9i7lgftekc18d4hfp2i3aj@ds033996.mlab.com:33996/heroku_c2ng6dvz' },
    addons: {},
    collaborators: [ 'tomas17777@o2.pl', 'rafal.wilmanowicz@gmail.com' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false },
        'http-sni': { enabled: false },
        'app-alerting': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'bookinservice.herokuapp.com' ] };