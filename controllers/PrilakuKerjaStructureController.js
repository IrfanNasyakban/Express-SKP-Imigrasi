const PrilakuKerjaStructure = require("../models/PrilakuKerjaStructureModel.js")
const { Op } = require("sequelize");

const getPrilakuKerjaStructure = async (req, res) => {
    try {
        const search = req.query.idIdentitasStructure || ""
        const prilakuKerjaStructure= await PrilakuKerjaStructure.findAll({
            where: {
                [Op.or]: [{
                    idIdentitasStructure: {
                        [Op.like]: '%' + search + '%'
                    }
                }]
            }
        });
        res.status(200).json(prilakuKerjaStructure);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getPrilakuKerjaStructureById = async (req, res) => {
    try {
        const response = await PrilakuKerjaStructure.findOne({
            where: {
                idPrilakuKerjaStructure: req.params.idPrilakuKerjaStructure,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createPrilakuKerjaStructure = async (req, res) => {
    const { idIdentitasStructure, berorientasiPelayanan, akuntabel, kompeten, harmonis, loyal, adaptif, kolaboratif } = req.body;
    try {

        const idPrilakuKerjaStructure = `ID${Date.now().toString().padStart(13, '0')}`;

        await PrilakuKerjaStructure.create({
            idPrilakuKerjaStructure: idPrilakuKerjaStructure,
            idIdentitasStructure: idIdentitasStructure,
            berorientasiPelayanan: berorientasiPelayanan,
            akuntabel: akuntabel,
            kompeten: kompeten,
            harmonis: harmonis,
            loyal: loyal,
            adaptif: adaptif,
            kolaboratif: kolaboratif,
        });

        res.json({ msg: "Prilaku Kerja Structure Created" });
    } catch (error) {
        console.log(error);
    }
};

const updatePrilakuKerjaStructure = async (req, res) => {
    try {
        await PrilakuKerjaStructure.update(req.body, {
            where:{
                idPrilakuKerjaStructure: req.params.idPrilakuKerjaStructure
            }
        })
        res.status(200).json({msg: "Prilaku Kerja Structure Updated"})
    } catch (error) {
        console.log(error.message);
    }
};

const deletePrilakuKerjaStructure = async (req, res) => {
    try {
        await PrilakuKerjaStructure.destroy({
            where: {
                idPrilakuKerjaStructure: req.params.idPrilakuKerjaStructure,
            },
        });
        res.status(200).json({ msg: "Prilaku Kerja Structure Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getPrilakuKerjaStructure,
    getPrilakuKerjaStructureById,
    createPrilakuKerjaStructure,
    updatePrilakuKerjaStructure,
    deletePrilakuKerjaStructure
};