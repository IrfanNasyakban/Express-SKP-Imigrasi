const Identitas = require("../models/IdentitasModel.js")
const RhkIntervensi = require("../models/rhkIntervensiModel.js")
const Rhk = require("../models/rhkModel.js")
const PrilakuKerja = require("../models/prilakuKerjaModel.js")
const { Op } = require("sequelize");

const getIdentitas = async (req, res) => {
    try {
        const search = req.query.search_query || ""
        const identitas = await Identitas.findAll({
            include: [
                {
                    model: RhkIntervensi,
                    include: [Rhk]
                },
                {
                    model: PrilakuKerja
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

const getIdentitasById = async (req, res) => {
    try {
        const response = await Identitas.findOne({
            include: [
                {
                    model: RhkIntervensi,
                    include: [Rhk]
                },
                {
                    model: PrilakuKerja
                }
            ],
            where: {
                idIdentitas: req.params.idIdentitas,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createIdentitas = async (req, res) => {
    const { namaPegawai, nipPegawai, pngktAndGolRuangPegawai, jabatanPegawai, unitKerjaPegawai, namaPejabat, nipPejabat, pngktAndGolRuangPejabat, jabatanPejabat, unitKerjaPejabat } = req.body;
    try {

        const idIdentitas = `ID${Date.now().toString().padStart(13, '0')}`;

        await Identitas.create({
            idIdentitas: idIdentitas,
            namaPegawai: namaPegawai,
            nipPegawai: nipPegawai,
            pngktAndGolRuangPegawai: pngktAndGolRuangPegawai,
            jabatanPegawai: jabatanPegawai,
            unitKerjaPegawai: unitKerjaPegawai,
            namaPejabat: namaPejabat,
            nipPejabat: nipPejabat,
            pngktAndGolRuangPejabat: pngktAndGolRuangPejabat,
            jabatanPejabat: jabatanPejabat,
            unitKerjaPejabat: unitKerjaPejabat,
        });

        res.json({ msg: "Data Created", idIdentitas: idIdentitas });
    } catch (error) {
        console.log(error);
    }
};

const updateIdentitas = async (req, res) => {
    try {
        await Identitas.update(req.body, {
            where:{
                idIdentitas: req.params.idIdentitas
            }
        })
        res.status(200).json({msg: "Identitas Updated"})
    } catch (error) {
        console.log(error.message);
    }
};

const deleteIdentitas = async (req, res) => {
    try {
        await Identitas.destroy({
            where: {
                idIdentitas: req.params.idIdentitas,
            },
        });
        res.status(200).json({ msg: "Identitas Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getIdentitas,
    getIdentitasById,
    createIdentitas,
    updateIdentitas,
    deleteIdentitas
};