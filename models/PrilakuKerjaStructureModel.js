const { Sequelize } = require("sequelize");
const db = require("../config/database.js");
const IdentitasStructure = require("./IdentitasStructureModel.js");

const {DataTypes} = Sequelize;

const PrilakuKerjaStructure = db.define('prilaku_kerja_structure', {
    idPrilakuKerjaStructure: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    idIdentitasStructure: DataTypes.STRING,
    berorientasiPelayanan: DataTypes.STRING,
    akuntabel: DataTypes.STRING,
    kompeten: DataTypes.STRING,
    harmonis: DataTypes.STRING,
    loyal: DataTypes.STRING,
    adaptif: DataTypes.STRING,
    kolaboratif: DataTypes.STRING,
}, {
    freezeTableName: true
})

PrilakuKerjaStructure.belongsTo(IdentitasStructure, { foreignKey: 'idIdentitasStructure' })
IdentitasStructure.hasMany(PrilakuKerjaStructure, { foreignKey: 'idIdentitasStructure' });

// Identitas.belongsTo(Data, { foreignKey: 'idData', as: "Data" })
// Data.hasMany(Identitas, { foreignKey: 'idData' });

module.exports = PrilakuKerjaStructure;

(async()=> {
    await db.sync();
})();