const IdentitasStructure = require("../models/IdentitasStructureModel.js")
const RhkStructure = require("../models/RhkStructureModel.js")
const IndikatorKinerja = require("../models/IndikatorKinerjaModel.js")
const PrilakuKerjaStructure = require("../models/PrilakuKerjaStructureModel.js")
const { Op } = require("sequelize");

const getIdentitasStructure = async (req, res) => {
    try {
        const search = req.query.search_query || ""
        const identitas = await IdentitasStructure.findAll({
            include: [
                {
                    model: RhkStructure,
                    include: [IndikatorKinerja]
                },
                {
                    model: PrilakuKerjaStructure
                }
            ],
            where: {
                [Op.or]: [{
                    namaPegawai: {
                        [Op.like]: '%' + search + '%'
                    }
                }]
            }
        });
        res.status(200).json(identitas);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getIdentitasStructureById = async (req, res) => {
    try {
        const response = await IdentitasStructure.findOne({
            include: [
                {
                    model: RhkStructure,
                    include: [IndikatorKinerja]
                },
                {
                    model: PrilakuKerjaStructure
                }
            ],
            where: {
                idIdentitasStructure: req.params.idIdentitasStructure,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createIdentitasStructure = async (req, res) => {
    const { namaPegawai, nipPegawai, pngktAndGolRuangPegawai, jabatanPegawai, unitKerjaPegawai, namaPejabat, nipPejabat, pngktAndGolRuangPejabat, jabatanPejabat, unitKerjaPejabat } = req.body;
    try {

        const idIdentitasStructure = `ID${Date.now().toString().padStart(13, '0')}`;

        let formattedNipPegawai = nipPegawai;
        if (nipPegawai.length > 8) {
            formattedNipPegawai = nipPegawai.slice(0, 8) + " " + nipPegawai.slice(8);
        }

        let formattedNipPejabat = nipPejabat;
        if (nipPejabat.length > 8) {
            formattedNipPejabat = nipPejabat.slice(0, 8) + " " + nipPejabat.slice(8);
        }

        await IdentitasStructure.create({
            idIdentitasStructure: idIdentitasStructure,
            namaPegawai: namaPegawai,
            nipPegawai: formattedNipPegawai,
            pngktAndGolRuangPegawai: pngktAndGolRuangPegawai,
            jabatanPegawai: jabatanPegawai,
            unitKerjaPegawai: unitKerjaPegawai,
            namaPejabat: namaPejabat,
            nipPejabat: formattedNipPejabat,
            pngktAndGolRuangPejabat: pngktAndGolRuangPejabat,
            jabatanPejabat: jabatanPejabat,
            unitKerjaPejabat: unitKerjaPejabat,
        });

        res.json({ msg: "Data Created", idIdentitasStructure: idIdentitasStructure });
    } catch (error) {
        console.log(error);
    }
};

const updateIdentitasStructure = async (req, res) => {
    try {
        await IdentitasStructure.update(req.body, {
            where:{
                idIdentitasStructure: req.params.idIdentitasStructure
            }
        })
        res.status(200).json({msg: "Identitas Structure Updated"})
    } catch (error) {
        console.log(error.message);
    }
};

const deleteIdentitasStructure = async (req, res) => {
    try {
        await IdentitasStructure.destroy({
            where: {
                idIdentitasStructure: req.params.idIdentitasStructure,
            },
        });
        res.status(200).json({ msg: "Identitas Structure Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getIdentitasStructure,
    getIdentitasStructureById,
    createIdentitasStructure,
    updateIdentitasStructure,
    deleteIdentitasStructure
};