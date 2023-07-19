require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const bichosRoutes = require("./routes/bichosRoutes"); // conecto as rotas

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();
const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/rg/bichos", bichosRoutes); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;