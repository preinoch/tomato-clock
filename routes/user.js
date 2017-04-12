var express = require('express');
var router = express.Router();
let user = require('../controller/user.js');

router.post('/login', function(req, res, next) {
    user.login(req, res);
});

/* GET users listing. */
router.post('/register', function(req, res, next) {
    user.register(req, res);
});

module.exports = router;
