const IndikatorKinerja = require("../models/IndikatorKinerjaModel.js")
const IdentitasStructure = require("../models/IdentitasStructureModel.js")
const RhkStructure = require("../models/RhkStructureModel.js")

const getIndikatorKinerja = async (req, res) => {
    try {
        const indikatorKinerja = await IndikatorKinerja.findAll();
        res.status(200).json(indikatorKinerja);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getIndikatorKinerjaByIdIdentitasStructure = async (req, res) => {
    const { idIdentitasStructure } = req.params;
    try {
        const indikatorKinerja = await IndikatorKinerja.findAll({
            include:
                {
                    model: RhkStructure,
                    as: 'RhkStructure',
                    where: { idIdentitasStructure: idIdentitasStructure },
                }
            
        });
        res.status(200).json(indikatorKinerja);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getIndikatorKinerjaById = async (req, res) => {
    try {
        const response = await IndikatorKinerja.findOne({
            where: {
                idIndikatorKinerja: req.params.idIndikatorKinerja,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createIndikatorKinerja = async (req, res) => {
    const { idRhkStructure, indikatorKinerja, target, perspektif } = req.body;
    try {

        const idIndikatorKinerja = `ID${Date.now().toString().padStart(13, '0')}`;

        await IndikatorKinerja.create({
            idIndikatorKinerja: idIndikatorKinerja,
            idRhkStructure: idRhkStructure,
            indikatorKinerja: indikatorKinerja,
            target: target,
            perspektif: perspektif,
        });

        // Ambil data Identitas Structure berdasarkan idRhkStructure
        const identitasStructure = await RhkStructure.findOne({ where: { idRhkStructure } });

         // Jika data Identitas ditemukan, kirim kembali data idIdentitas
         if (identitasStructure) {
            res.json({ msg: "Indikator Kinerja Created", idIndikatorKinerja: idIndikatorKinerja, idIdentitasStructure: identitasStructure.idIdentitasStructure });
        } else {
            // Jika data Identitas tidak ditemukan, kirim pesan kesalahan
            res.status(404).json({ error: "Data Identitas not found" });
        }
    } catch (error) {
        console.log(error);
    }
};

const updateIndikatorKinerja = async (req, res) => {
    try {
        await IndikatorKinerja.update(req.body, {
            where:{
                idIndikatorKinerja: req.params.idIndikatorKinerja
            }
        })
        res.status(200).json({msg: "Indikator Kinerja Updated"})
    } catch (error) {
        console.log(error.message);
    }
};

const deleteIndikatorKinerja = async (req, res) => {
    try {
        await IndikatorKinerja.destroy({
            where: {
                idIndikatorKinerja: req.params.idIndikatorKinerja,
            },
        });
        res.status(200).json({ msg: "Indikator Kinerja Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getIndikatorKinerja,
    getIndikatorKinerjaByIdIdentitasStructure,
    getIndikatorKinerjaById,
    createIndikatorKinerja,
    updateIndikatorKinerja,
    deleteIndikatorKinerja
};