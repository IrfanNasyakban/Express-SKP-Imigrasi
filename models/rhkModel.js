const { Sequelize } = require("sequelize");
const db = require("../config/database.js");
const Intervensi = require("./rhkIntervensiModel.js");

const { DataTypes } = Sequelize;

const Rhk = db.define('rhk', {
    idRhk: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    idIntervensi: DataTypes.STRING,
    rhk: DataTypes.STRING,
    kuantitas: DataTypes.STRING,
    kualitas: DataTypes.STRING,
    waktu: DataTypes.STRING,
}, {
    freezeTableName: true
})

Rhk.belongsTo(Intervensi, { foreignKey: 'idIntervensi', as: "Intervensi" })
Intervensi.hasMany(Rhk, { foreignKey: 'idIntervensi' });

module.exports = Rhk;

(async()=> {
    await db.sync();
})();