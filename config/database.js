const { Sequelize } = require("sequelize");

const db = new Sequelize('db_skp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db;