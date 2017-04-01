let sequelize = require('./pool');

var User = sequelize.import(__dirname + "/user.js");
var Task = sequelize.import(__dirname + "/task.js");

User.sync({force: true});
Task.sync({force: true});