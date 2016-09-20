var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

var prod = { name: 'bookinservice',
    organization: undefined,
    region: 'us',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        MONGODB_URI: process.env.MONGODB_URI,
        NODE_ENV: 'production'
    },
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

configurator(prod);