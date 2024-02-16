const { Sequelize } = require("sequelize");
const db = require("../config/database.js");
const Identitas = require("./IdentitasModel.js");

const { DataTypes } = Sequelize;

const Intervensi = db.define('rhk_intervensi', {
    idIntervensi: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: false
    },
    idIdentitas: DataTypes.STRING,
    rhkIntervensi: DataTypes.STRING,
}, {
    freezeTableName: true
})

Intervensi.belongsTo(Identitas, { foreignKey: 'idIdentitas', as: "Identitas" })
Identitas.hasMany(Intervensi, { foreignKey: 'idIdentitas' });

module.exports = Intervensi;

(async()=> {
    await db.sync();
})();