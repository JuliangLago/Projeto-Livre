const controller = require("../controllers/bichosController");

const express = require("express"); 

const router = express.Router();


router.get("/all", controller.getAllBichos);
router.get("/:id", controller.getBichoById);
router.post("/new", controller.addNewBicho);
router.patch("/:id", controller.updateBichoById);
router.delete("/:id", controller.deleteBicho);

module.exports = router;