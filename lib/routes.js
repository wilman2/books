module.exports = function (stockRepository) {
    return {
        stockUp: function (req, res, next) {
            stockRepository.
                stockUp(req.body.isbn, req.body.count).
                then(function () {
                    res.json({ isbn: req.body.isbn, count: req.body.count });
                }).
                catch(next);
        },
        findAll: function (req, res, next) {
            stockRepository.
                findAll().
                then(function (results) {
                    res.json(results);
                }).
                catch(next);
        },
        getCount: function (req, res, next) {
            stockRepository.
                getCount(req.params.isbn).
                then(function (result) {
                    if (result) {
                        res.format({
                            json : function () {
                                res.json({count : result});
                            },
                            html : function () {
                                res.send('<div> There is a lot.. there is a ${result} books</div>');
                            }
                        });
                    } else {
                        res.status(404).send('No book with isbn ' + req.params.isbn);
                    }
                }).
                catch(next);
        },
        hello: function (req, res) {
            res.send('Hello World pipeline test!');
        }
    };
};