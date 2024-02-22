const express = require("express");
const router = express.Router();

const {
    getPrilakuKerjaStructure,
    getPrilakuKerjaStructureById,
    createPrilakuKerjaStructure,
    updatePrilakuKerjaStructure,
    deletePrilakuKerjaStructure
} = require("../controllers/PrilakuKerjaStructureController.js");

router.get("/prilaku-kerja-structure", getPrilakuKerjaStructure);
router.get("/prilaku-kerja-structure/:idPrilakuKerjaStructure", getPrilakuKerjaStructureById);
router.post("/prilaku-kerja-structure", createPrilakuKerjaStructure);
router.patch("/prilaku-kerja-structure/:idPrilakuKerjaStructure", updatePrilakuKerjaStructure);
router.delete("/prilaku-kerja-structure/:idPrilakuKerjaStructure", deletePrilakuKerjaStructure);

module.exports = router;