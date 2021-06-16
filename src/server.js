// Iniciando a biblioteca
const express = require('express')

// Iniciando o servidor 
const server = express();

// Criando as minhas rotas 
server.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

server.get("/study", (req, res) => {
    return res.send("Page study")
})

server.get("/create", (req, res) => {
    return res.send("Page ")
})

// Rodando o servidor
server.listen(8080)
