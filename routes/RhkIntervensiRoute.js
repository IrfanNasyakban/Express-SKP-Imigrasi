const express = require("express");
const router = express.Router();

const {
    getRhkIntervensi,
    getRhkIntervensiById,
    createRhkIntervensi,
    updateRhkIntervensi,
    deleteRhkIntervensi
} = require("../controllers/rhkIntervensiController.js");

router.get("/intervensi", getRhkIntervensi);
router.get("/intervensi/:idIntervensi", getRhkIntervensiById);
router.post("/intervensi", createRhkIntervensi);
router.patch("/intervensi/:idIntervensi", updateRhkIntervensi);
router.delete("/intervensi/:idIntervensi", deleteRhkIntervensi);

module.exports = router;