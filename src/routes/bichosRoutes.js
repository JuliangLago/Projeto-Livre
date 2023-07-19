const controller = require("../controllers/bichosController"); // conecto ao controller

const express = require("express"); // importo o express

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/all", controller.getAllBichos);
router.get("/:id", controller.getBichoById);
router.post("/new", controller.addNewBicho);
router.patch("/:id", controller.updateBichoById);
router.delete("/:id", controller.deleteBicho);

module.exports = router; //exporto as rotas