const Rhk = require("../models/rhkModel.js")
const Identitas = require("../models/IdentitasModel.js")
const Intervensi = require("../models/rhkIntervensiModel.js")

const getRhk = async (req, res) => {
    try {
        const rhk = await Rhk.findAll();
        res.status(200).json(rhk);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getRhkByIdIdentitas = async (req, res) => {
    const { idIdentitas } = req.params;
    try {
        const rhk = await Rhk.findAll({
            include:
                {
                    model: Intervensi,
                    as: 'Intervensi',
                    where: { idIdentitas: idIdentitas },
                }
            
        });
        res.status(200).json(rhk);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

const getRhkById = async (req, res) => {
    try {
        const response = await Rhk.findOne({
            where: {
                idRhk: req.params.idRhk,
            },
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createRhk = async (req, res) => {
    const { idIntervensi, rhk, kuantitas, kualitas, waktu } = req.body;
    try {

        const idRhk = `ID${Date.now().toString().padStart(13, '0')}`;

        await Rhk.create({
            idRhk: idRhk,
            idIntervensi: idIntervensi,
            rhk: rhk,
            kuantitas: kuantitas,
            kualitas: kualitas,
            waktu: waktu,
        });

        // Ambil data Identitas berdasarkan idIntervensi
        const identitas = await Intervensi.findOne({ where: { idIntervensi } });

         // Jika data Identitas ditemukan, kirim kembali data idIdentitas
         if (identitas) {
            res.json({ msg: "RHK Created", idRhk: idRhk, idIdentitas: identitas.idIdentitas });
        } else {
            // Jika data Identitas tidak ditemukan, kirim pesan kesalahan
            res.status(404).json({ error: "Data Identitas not found" });
        }
    } catch (error) {
        console.log(error);
    }
};

const updateRhk = async (req, res) => {
    try {
        await Rhk.update(req.body, {
            where:{
                idRhk: req.params.idRhk
            }
        })
        res.status(200).json({msg: "RHK Updated"})
    } catch (error) {
        console.log(error.message);
    }
};

const deleteRhk = async (req, res) => {
    try {
        await Rhk.destroy({
            where: {
                idRhk: req.params.idRhk,
            },
        });
        res.status(200).json({ msg: "RHK Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getRhk,
    getRhkByIdIdentitas,
    getRhkById,
    createRhk,
    updateRhk,
    deleteRhk
};