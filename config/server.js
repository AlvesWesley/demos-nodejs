const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

// Configuração do express session
const sessionConfig = {
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: { maxAge: 1000 * 60 * 60 } // 1 hora
}

// Setando o EJS como view engine
app.set('view engine', 'ejs')
// Informando onde está o diretório de views
app.set('views', './app/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Adicionando o express session como middleware
app.use(session(sessionConfig))
// Informando a pasta pública da aplicação
app.use(express.static('./app/public'))
// Adicionando as rotas na aplicação
app.use(routes)

module.exports = app
