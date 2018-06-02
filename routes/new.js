var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var name = req.body.name;
    console.log(name);
    var surname = req.body.surname;
    var email = req.body.email;

    res.locals.connection.query('insert into members set ?',[req.body], function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });

});

module.exports = router;
