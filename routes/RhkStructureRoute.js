const express = require("express");
const router = express.Router();

const {
    getRhkStructure,
    getRhkStructureById,
    getRhkStructureByIdIdentitasStructure,
    createRhkStructure,
    updateRhkStructure,
    deleteRhkStructure
} = require("../controllers/RhkStructureController.js");

router.get("/rhk-structure", getRhkStructure);
router.get("/rhk-structure/:idRhkStructure", getRhkStructureById);
router.get("/rhk-structure/identitas-structure/:idIdentitasStructure", getRhkStructureByIdIdentitasStructure);
router.post("/rhk-structure", createRhkStructure);
router.patch("/rhk-structure/:idRhkStructure", updateRhkStructure);
router.delete("/rhk-structure/:idRhkStructure", deleteRhkStructure);

module.exports = router;