const express = require("express");
const router = express.Router();

const {
    getIdentitas,
    getIdentitasById,
    createIdentitas,
    updateIdentitas,
    deleteIdentitas
} = require("../controllers/IdentitasController.js");

router.get("/identitas", getIdentitas);
router.get("/identitas/:idIdentitas", getIdentitasById);
router.post("/identitas", createIdentitas);
router.patch("/identitas/:idIdentitas", updateIdentitas);
router.delete("/identitas/:idIdentitas", deleteIdentitas);

module.exports = router;