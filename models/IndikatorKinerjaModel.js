const { Sequelize } = require("sequelize");
const db = require("../config/database.js");
const RhkStructure = require("./RhkStructureModel.js");

const { DataTypes } = Sequelize;

const IndikatorKinerja = db.define('indikator_kinerja', {
    idIndikatorKinerja: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    idRhkStructure: DataTypes.STRING,
    indikatorKinerja: DataTypes.STRING,
    target: DataTypes.STRING,
    perspektif: DataTypes.STRING,
}, {
    freezeTableName: true
})

IndikatorKinerja.belongsTo(RhkStructure, { foreignKey: 'idRhkStructure', as: "RhkIntervensi" })
RhkStructure.hasMany(IndikatorKinerja, { foreignKey: 'idRhkStructure' });

module.exports = IndikatorKinerja;

(async()=> {
    await db.sync();
})();