// Importar o package express
const express = require("express");

// Instanciar o express
const app = express();

// Configuração da primeira rota
//app.use( "/" , (req,res) => res.send("Olá Mundo") );

// Informa ao node que ele usará o arquivo routes para criar as rotas
app.use( "/" , require("./src/routes") );

// Informo ao Node qual porta ele vai usar
app.listen( process.env.PORT || 3000, console.log("Servidor up") );