const sequelize = require('./pool');
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: {msg: "用户名不能为空！"},
                len: {
                    args: [6, 20],
                    msg: "用户名长度需要在6～20之间！"
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {msg: "密码不能为空！"},
                len: {
                    args: [6, 20],
                    msg: "密码长度需要在6～20之间！"
                }
            }
        },
        nickName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {msg: "昵称不能为空！"},
                len: {
                    args: [1, 8],
                    msg: "昵称长度需要在1～8之间！"
                }
            }
        }
    });
}


