const express = require("express");
const router = express.Router();

const {
    getIndikatorKinerja,
    getIndikatorKinerjaByIdIdentitasStructure,
    getIndikatorKinerjaById,
    createIndikatorKinerja,
    updateIndikatorKinerja,
    deleteIndikatorKinerja
} = require("../controllers/IndikatorKinerjaController.js");

router.get("/indikator-kinerja", getIndikatorKinerja);
router.get("/indikator-kinerja/identitas-structure/:idIdentitasStructure", getIndikatorKinerjaByIdIdentitasStructure,);
router.get("/indikator-kinerja/:idIndikatorKinerja", getIndikatorKinerjaById);
router.post("/indikator-kinerja", createIndikatorKinerja);
router.patch("/indikator-kinerja/:idIndikatorKinerja", updateIndikatorKinerja);
router.delete("/indikator-kinerja/:idIndikatorKinerja", deleteIndikatorKinerja);

module.exports = router;