// Dados dos proffys
const proffys = [
    {   
        name: "Pedro Makengo", 
        avatar: "./images/users/pedro.jpg", 
        whatsapp: "921538972", 
        bio: "Entusiasta pelo o apreendizado de novas tecnologias", 
        subject: "Programação", 
        cost: "10", 
        weekady: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {   
        name: "Makengo Mabango", 
        avatar: "./images/users/makengo.jpg", 
        whatsapp: "921538972", 
        bio: "Entusiasta pelo o apreendizado de novas tecnologias", 
        subject: "Química", 
        cost: "1.500", 
        weekady: [0], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes", 
    "Biologia", 
    "Ciências", 
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// Iniciando a biblioteca
const express = require('express')
const server = express()

// Trabalhar aqui nas funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query 
    return res.render("study.html", { proffys , filters, subjects})
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

// Configurando o nunjucks 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true // cache armazenar na memória
})

// Configuração do servidor para tratar dos arquivos estáticos
server.use(express.static("public"))

// Criando as minhas rotas 
server.get("/", pageLanding)

server.get("/study", pageStudy)

server.get("/give-classes", pageGiveClasses)

// Rodando o servidor
server.listen(8080)
