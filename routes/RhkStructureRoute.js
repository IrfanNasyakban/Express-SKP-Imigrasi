const express = require("express");
const router = express.Router();

const {
    getRhkStructure,
    getRhkStructureById,
    createRhkStructure,
    updateRhkStructure,
    deleteRhkStructure
} = require("../controllers/RhkStructureController.js");

router.get("/rhk-structure", getRhkStructure);
router.get("/rhk-structure/:idRhkStructure", getRhkStructureById);
router.post("/rhk-structure", createRhkStructure);
router.patch("/rhk-structure/:idRhkStructure", updateRhkStructure);
router.delete("/rhk-structure/:idRhkStructure", deleteRhkStructure);

module.exports = router;