const { Sequelize } = require("sequelize");
const db = require("../config/database.js");
const IdentitasStructure = require("./IdentitasStructureModel.js");

const { DataTypes } = Sequelize;

const RhkStructure = db.define('rhk_structure', {
    idRhkStructure: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    idIdentitasStructure: DataTypes.STRING,
    rhk: DataTypes.STRING,
}, {
    freezeTableName: true
})

RhkStructure.belongsTo(IdentitasStructure, { foreignKey: 'idIdentitasStructure', as: "IdentitasStructure" })
IdentitasStructure.hasMany(RhkStructure, { foreignKey: 'idIdentitasStructure' });

module.exports = RhkStructure;

(async()=> {
    await db.sync();
})();