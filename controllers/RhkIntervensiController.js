const Intervensi = require("../models/rhkIntervensiModel.js")
const { Op } = require("sequelize");

const getRhkIntervensi = async (req, res) => {
    try {
        const search = req.query.idIdentitas || ""
        const rhkIntervensi = await Intervensi.findAll({
            where: {
                [Op.or]: [{
                    idIdentitas: {
                        [Op.like]: '%' + search + '%'
                    }
                }]
            }
        });
        res.status(200).json(rhkIntervensi);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getRhkIntervensiById = async (req, res) => {
    try {
        const response = await Intervensi.findOne({
            where: {
                idIntervensi: req.params.idIntervensi,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createRhkIntervensi = async (req, res) => {
    const { idIdentitas, rhkIntervensi } = req.body;
    try {

        const idIntervensi = `ID${Date.now().toString().padStart(13, '0')}`;

        await Intervensi.create({
            idIntervensi: idIntervensi,
            idIdentitas: idIdentitas,
            rhkIntervensi: rhkIntervensi,
        });

        res.json({ msg: "Data Created", idIntervensi: idIntervensi });
    } catch (error) {
        console.log(error);
    }
};

const updateRhkIntervensi = async (req, res) => {
    try {
        await Intervensi.update(req.body, {
            where:{
                idIntervensi: req.params.idIntervensi
            }
        })
        res.status(200).json({msg: "Intervensi Updated"})
    } catch (error) {
        console.log(error.message);
    }
};

const deleteRhkIntervensi = async (req, res) => {
    try {
        await Intervensi.destroy({
            where: {
                idIntervensi: req.params.idIntervensi,
            },
        });
        res.status(200).json({ msg: "Intervensi Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getRhkIntervensi,
    getRhkIntervensiById,
    createRhkIntervensi,
    updateRhkIntervensi,
    deleteRhkIntervensi
};