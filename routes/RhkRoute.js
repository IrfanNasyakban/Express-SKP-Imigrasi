const express = require("express");
const router = express.Router();

const {
    getRhk,
    getRhkByIdIdentitas,
    getRhkById,
    createRhk,
    updateRhk,
    deleteRhk
} = require("../controllers/RhkController.js");

router.get("/rhk", getRhk);
router.get("/rhk/identitas/:idIdentitas", getRhkByIdIdentitas,);
router.get("/rhk/:idRhk", getRhkById);
router.post("/rhk", createRhk);
router.patch("/rhk/:idRhk", updateRhk);
router.delete("/rhk/:idRhk", deleteRhk);

module.exports = router;