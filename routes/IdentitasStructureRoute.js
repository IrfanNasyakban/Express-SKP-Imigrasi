const express = require("express");
const router = express.Router();

const {
    getIdentitasStructure,
    getIdentitasStructureById,
    createIdentitasStructure,
    updateIdentitasStructure,
    deleteIdentitasStructure
} = require("../controllers/IdentitasStructureController.js");

router.get("/identitas-structure", getIdentitasStructure);
router.get("/identitas-structure/:idIdentitasStructure", getIdentitasStructureById);
router.post("/identitas-structure", createIdentitasStructure);
router.patch("/identitas-structure/:idIdentitasStructure", updateIdentitasStructure);
router.delete("/identitas-structure/:idIdentitasStructure", deleteIdentitasStructure);

module.exports = router;