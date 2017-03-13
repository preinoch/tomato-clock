let mysql  = require('mysql');
let config = require('../config');

let pool  = mysql.createPool(config.mysql);

module.exports = {
    get: function(req, res, next){
        pool.getConnection(function(err, connection) {
            // Use the connection
            connection.query( 'SELECT * FROM users;', function(err, rows) {
                res.json(rows);
            });
        });
    }
    
}

