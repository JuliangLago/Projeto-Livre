const mongoose = require("mongoose");

const BichoSchema = new mongoose.Schema(
  {
    
    nome: {
      type: String,
      required: true,
      unique: true,
    },
    aniversario: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
    especie: {
      type: String,
      required: true,
    },
    sexo: {
      type: String,
      required: true,
    },
    tomaRemedio: {
      type: Boolean,
      required: true,
    },
    qualRemedio: {
      trype: String,
    }
  }
);

const Model = mongoose.model("Bicho", BichoSchema);


module.exports = Model;