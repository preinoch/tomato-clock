let sequelize = require('../model/pool');
let User = sequelize.import(__dirname + "/../model/user.js");
let protocol = require('../util/protocol.js');

exports.register = function(req, res) {
    User.create(req.body, {fields: ['username', 'password', 'nickName']}).then(function(user) {
        res.send(protocol());
    }).catch(function(error) {
        console.log(error);
        res.send(protocol('', '', 1));
    })
}

exports.login = function(req, res) {
    let requestData = req.query;
    console.log(requestData);
    User.find({
        where: {
            username: requestData.username,
            password: requestData.password
        }
    }).then(function(user) {
        console.log(user);
        if(user) {
            req.session.regenerate(function(err) {
                if(err){
                    res.send(protocol("登录失败", "", 1)); 
                }else {
                    req.session.user = requestData.username;
                    res.send(protocol()); 
                }                   
            });
        }else {
            res.send(protocol("账户密码错误", "", 1));  
        }
    }).catch(function(error) {
        res.send(protocol("登录失败", "", 1));                 
    })
}
