module.exports = function(username, password) {
    console.log(username, password);
    return function (req, res, next) {
        console.log(username, password);
        next();
    }
};
