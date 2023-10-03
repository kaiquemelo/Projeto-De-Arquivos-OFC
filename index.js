// importação dos modulos
const express = require("express");
var fs = require('fs');

// Cria as rotas do meu projeto:
const router = express.Router();

// Rotas *** Para acessar digite no navegador: localhost:3000 <== Porta ***

router.get("/", (req , res) => {
    res.sendFile(__dirname + "/views/index.html");
});

router.get('/produtos', (req , res) => {
    res.sendFile(__dirname + "/views/produtos.html");
});

router.get('/catalogos', (req , res) => {
    res.sendFile(__dirname + "/views/catalogo.html");
});

router.get('/contatos', (req , res) => {
    res.sendFile(__dirname + "/views/contato.html");
});

router.get('/tipoDocx', (req , res) => {
    res.sendFile("C:/Projeto02 - Server Arquivos Kaique/recursos/arquivo.docx");
});

router.get('/tipoJpeg', (req , res) => {
    res.sendFile("C:/Projeto02 - Server Arquivos Kaique/recursos/arquivo.jpeg");
});

router.get('/tipoMp3', (req , res) => {
    res.sendFile("C:/Projeto02 - Server Arquivos Kaique/recursos/arquivo.mp3");
});

router.get('/tipoMp4', (req , res) => {
    res.sendFile("C:/Projeto02 - Server Arquivos Kaique/recursos/arquivo.mp4");
});

router.get('/tipoJson', (req , res) => {
    res.sendFile("C:/Projeto02 - Server Arquivos Kaique/recursos/arquivo.Json");
});

router.get('/tipoMd', (req , res) => {
    res.sendFile("C:/Projeto02 - Server Arquivos Kaique/recursos/arquivo.md");
});


// Configuração para exportação
const index = express();
index.use('/', router);

module.exports = index;