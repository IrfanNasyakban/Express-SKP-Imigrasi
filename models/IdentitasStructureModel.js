const { Sequelize } = require("sequelize");
const db = require("../config/database.js");

const {DataTypes} = Sequelize;

const IdentitasStructure = db.define('identitas_structure', {
    idIdentitasStructure: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    namaPegawai: DataTypes.STRING,
    nipPegawai: DataTypes.STRING,
    pngktAndGolRuangPegawai: DataTypes.STRING,
    jabatanPegawai: DataTypes.STRING,
    unitKerjaPegawai: DataTypes.STRING,
    namaPejabat: DataTypes.STRING,
    nipPejabat: DataTypes.STRING,
    pngktAndGolRuangPejabat: DataTypes.STRING,
    jabatanPejabat: DataTypes.STRING,
    unitKerjaPejabat: DataTypes.STRING,
}, {
    freezeTableName: true
})

// Identitas.belongsTo(Data, { foreignKey: 'idData', as: "Data" })
// Data.hasMany(Identitas, { foreignKey: 'idData' });

module.exports = IdentitasStructure;

(async()=> {
    await db.sync();
})();