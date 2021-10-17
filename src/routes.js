// Importar o package express
const express = require("express");

// Instancia a função Router
var routes = express.Router();

// Definição das rotas
routes.get("/" , (req,res) => res.send("Olá Mundo") );
routes.get("/home" , (req,res) => res.send("Página inicial") );


// Tornar o arquivo exportável
module.exports = routes;