let sequelize = require('./pool');
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('task', {
        taskName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        targetTime: {
            type: Sequelize.DATE,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        underscored: false
    });
}