// Importar o package express
const express = require("express");

// Instanciar o express
const app = express();

// Configuração da primeira rota
app.use( "/" , (req,res) => res.send("Olá Mundo") );

// Informo ao Node qual porta ele vai usar
app.listen( process.env.PORT || 3000, console.log("Servidor up") );