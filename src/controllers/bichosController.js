const bichosModel = require("../models/bichosModel");

const getAllBichos = async (req, res) => {
    try {
      const allBichos = await bichosModel.find({}, null);
      res.status(200).json(allBichos);
    } catch {
      res.status(500).json({ message: error.message });
    };
  };

  const getBichoById = async (req, res) => {
    try {   
      const findBicho = await bichosModel.findById(req.params.id);
      res.status(200).json(findBicho);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


const addNewBicho = async (req, res) => {
    try {
      const {
        id,
        nome,
        aniversario,
        idade,
        especie,
        sexo
      } = req.body;
  
      const newBicho = new bichosModel({
        id,
        nome,
        aniversario,
        idade,
        especie,
        sexo
      });
      const savedBicho = await newBicho.save();
      res
        .status(200)
        .json({ message: "morte!", savedBicho });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    };
  };

  const updateBichoById = async (req, res) => {
    try {
      const {
        nome,
        aniversario,
        idade,
        especie,
        sexo
      } = req.body;
      const updateBicho = await bichosModel.findByIdAndUpdate(
        req.params.id,
        {
        nome,
        aniversario,
        idade,
        especie,
        sexo
        }
      );
      res.status(200).json(updateBicho);
    } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
  };

  const deleteBicho = async (req, res) => {
    try {
        const { id } = req.params;
        const findBichos = await bichosModel.findByIdAndDelete(id);
    
        if (findBichos == null) {
          return res.status(404).json({ message: `bicho do id ${id} não` })
        };
        
        res.status(200).json({ message: `bicho do id ${id} sumiu` });
      } catch (error) {
        res.status(500).json({ message: error.message });
      };
    };
  

module.exports = {
    getAllBichos,
    getBichoById,
    addNewBicho,
    updateBichoById,
    deleteBicho
};