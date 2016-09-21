module.exports = function(username, password) {
    return function(req, res, next) {
        var credentials = auth(req);
        if (credentials && credentials.name === 'admin' && credentials.pass === 'admin') {
            next();
        } else {
            res.setHeader('WWW-Authenticate', 'Basic realm=book inventory access');
            res.status(401).send('Access denied');
        }
    };
};