var express = require('express');
var router = express.Router();

/* GET users listing. */
router.put('/:id?', function(req, res, next) {
     var members = {
         "name": req.body.name,
         "surname": "req.body.surname",
         "email": "jjjj@mail.com"};
    res.locals.connection.query('update members set ? where id = ' + req.params.id, members, function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });

});

module.exports = router;