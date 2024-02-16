const express = require("express");
const router = express.Router();

const {
    getPrilakuKerja,
    getPrilakuKerjaById,
    createPrilakuKerja,
    updatePrilakuKerja,
    deletePrilakuKerja
} = require("../controllers/PrilakuKerjaController.js");

router.get("/prilaku-kerja", getPrilakuKerja);
router.get("/prilaku-kerja/:idPrilakuKerja", getPrilakuKerjaById);
router.post("/prilaku-kerja", createPrilakuKerja);
router.patch("/prilaku-kerja/:idPrilakuKerja", updatePrilakuKerja);
router.delete("/prilaku-kerja/:idPrilakuKerja", deletePrilakuKerja);

module.exports = router;