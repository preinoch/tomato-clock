protocol = require('../util/protocol.js');

exports.auth = function(req, res, next) {
    let sess = req.session;
    if( !sess.uid ) {
        res.send(protocol("未登录", "", 1));
        res.end();
    } else {
        next();
    }
}