const IndikatorKinerja = require("../models/IndikatorKinerjaModel.js");
const RhkStructure = require("../models/RhkStructureModel.js")
const { Op } = require("sequelize");

const getRhkStructure = async (req, res) => {
    try {
        const search = req.query.idIdentitasStructure || ""
        const rhkStructure = await RhkStructure.findAll({
            where: {
                [Op.or]: [{
                    idIdentitasStructure: {
                        [Op.like]: '%' + search + '%'
                    }
                }]
            }
        });
        res.status(200).json(rhkStructure);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getRhkStructureById = async (req, res) => {
    try {
        const response = await RhkStructure.findOne({
            where: {
                idRhkStructure: req.params.idRhkStructure,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const getRhkStructureByIdIdentitasStructure = async (req, res) => {
    const { idIdentitasStructure } = req.params;
    try {
        const rhkStructure = await RhkStructure.findAll({
            where: { idIdentitasStructure: idIdentitasStructure },
            include: {
                model: IndikatorKinerja,
                as: 'indikator_kinerjas',
            },
            
        });
        res.status(200).json(rhkStructure);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const createRhkStructure = async (req, res) => {
    const { idIdentitasStructure, rhk } = req.body;
    try {

        const idRhkStructure = `ID${Date.now().toString().padStart(13, '0')}`;

        await RhkStructure.create({
            idRhkStructure: idRhkStructure,
            idIdentitasStructure: idIdentitasStructure,
            rhk: rhk,
        });

        res.json({ msg: "Data Created", idRhkStructure: idRhkStructure });
    } catch (error) {
        console.log(error);
    }
};

const updateRhkStructure = async (req, res) => {
    try {
        await RhkStructure.update(req.body, {
            where:{
                idRhkStructure: req.params.idRhkStructure
            }
        })
        res.status(200).json({msg: "RHK Structure Updated"})
    } catch (error) {
        console.log(error.message);
    }
};

const deleteRhkStructure = async (req, res) => {
    try {
        await RhkStructure.destroy({
            where: {
                idRhkStructure: req.params.idRhkStructure,
            },
        });
        res.status(200).json({ msg: "Rhk Structure Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getRhkStructure,
    getRhkStructureById,
    getRhkStructureByIdIdentitasStructure,
    createRhkStructure,
    updateRhkStructure,
    deleteRhkStructure
};