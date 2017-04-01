const sequelize = require('./pool');
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {msg: "用户名不能为空！"},
                max: {
                    args: 20,
                    msg: "用户名长度不得超过20！"
                },
                min: {
                    args: 6,
                    msg: "用户名长度不得少于6！" 
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: "密码不能为空！"},
                max: {
                    args: 20,
                    msg: "密码长度不得超过20！"
                },
                min: {
                    args: 6,
                    msg: "密码长度不得少于6！" 
                }
            }
        },
        nick_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: "昵称不能为空！"},
                max: {
                    args: 8,
                    msg: "昵称长度不得超过20！"
                },
                min: {
                    args: 1,
                    msg: "用户名长度不得少于1！" 
                }
            }
        }
    });
}










