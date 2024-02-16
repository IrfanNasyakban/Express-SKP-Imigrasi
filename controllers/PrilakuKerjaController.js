const PrilakuKerja = require("../models/prilakuKerjaModel.js")
const { Op } = require("sequelize");

const getPrilakuKerja = async (req, res) => {
    try {
        const search = req.query.idIdentitas || ""
        const prilakuKerja = await PrilakuKerja.findAll({
            where: {
                [Op.or]: [{
                    idIdentitas: {
                        [Op.like]: '%' + search + '%'
                    }
                }]
            }
        });
        res.status(200).json(prilakuKerja);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getPrilakuKerjaById = async (req, res) => {
    try {
        const response = await PrilakuKerja.findOne({
            where: {
                idPrilakuKerja: req.params.idPrilakuKerja,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createPrilakuKerja = async (req, res) => {
    const { idIdentitas, berorientasiPelayanan, akuntabel, kompeten, harmonis, loyal, adaptif, kolaboratif } = req.body;
    try {

        const idPrilakuKerja = `ID${Date.now().toString().padStart(13, '0')}`;

        await PrilakuKerja.create({
            idPrilakuKerja: idPrilakuKerja,
            idIdentitas: idIdentitas,
            berorientasiPelayanan: berorientasiPelayanan,
            akuntabel: akuntabel,
            kompeten: kompeten,
            harmonis: harmonis,
            loyal: loyal,
            adaptif: adaptif,
            kolaboratif: kolaboratif,
        });

        res.json({ msg: "Prilaku Kerja Created" });
    } catch (error) {
        console.log(error);
    }
};

const updatePrilakuKerja = async (req, res) => {
    try {
        await PrilakuKerja.update(req.body, {
            where:{
                idPrilakuKerja: req.params.idPrilakuKerja
            }
        })
        res.status(200).json({msg: "Prilaku Kerja Updated"})
    } catch (error) {
        console.log(error.message);
    }
};

const deletePrilakuKerja = async (req, res) => {
    try {
        await PrilakuKerja.destroy({
            where: {
                idPrilakuKerja: req.params.idPrilakuKerja,
            },
        });
        res.status(200).json({ msg: "Prilaku Kerja Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getPrilakuKerja,
    getPrilakuKerjaById,
    createPrilakuKerja,
    updatePrilakuKerja,
    deletePrilakuKerja
};