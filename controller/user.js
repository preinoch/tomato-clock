let sequelize = require('./pool');
let User = sequelize.import(__dirname + "/../model/user.js");


exports.register = function(username, password, nickName) {
    let user = User.build({
        
    })
}



