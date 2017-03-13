var express = require('express');
var router = express.Router();
var model = require("../controller/base-controller");

router.get('/login', function(req, res, next) {
    res.render('user/login');
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    model.get(req, res, next);
});

module.exports = router;
