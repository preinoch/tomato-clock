let sequelize = require('./pool');
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('task', {
        task_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        target_time: {
            type: Sequelize.DATE,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
}