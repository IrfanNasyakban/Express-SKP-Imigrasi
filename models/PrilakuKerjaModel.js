const { Sequelize } = require("sequelize");
const db = require("../config/database.js");
const Identitas = require("./IdentitasModel.js");

const {DataTypes} = Sequelize;

const PrilakuKerja = db.define('prilaku_kerja', {
    idPrilakuKerja: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    idIdentitas: DataTypes.STRING,
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

PrilakuKerja.belongsTo(Identitas, { foreignKey: 'idIdentitas' })
Identitas.hasMany(PrilakuKerja, { foreignKey: 'idIdentitas' });

// Identitas.belongsTo(Data, { foreignKey: 'idData', as: "Data" })
// Data.hasMany(Identitas, { foreignKey: 'idData' });

module.exports = PrilakuKerja;

(async()=> {
    await db.sync();
})();