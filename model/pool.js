const Sequelize = require('sequelize');
const config = require('../config');

let sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    dialectOptions: {
        charset: 'utf8mb4'
    },
    // define: {
    //     // 字段以下划线（_）来分割（默认是驼峰命名风格）
    //     'underscored': true
    // }
})

module.exports = sequelize;