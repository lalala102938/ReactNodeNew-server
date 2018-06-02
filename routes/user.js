var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id?', function(req, res, next) {
    res.locals.connection.query('SELECT * from members where id=?',req.params.id, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });

});

module.exports = router;
