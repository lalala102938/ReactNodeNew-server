var express = require('express');
var router = express.Router();

/* GET users listing. */
router.delete('/:id?', function(req, res, next) {
    res.locals.connection.query('delete from members where id=?',req.params.id, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });

});

module.exports = router;
