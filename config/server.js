/**
 *
 * express: framework HTTP
 * body-parser: biblioteca para receber o corpo das requisições como JSON
 * cors: biblioteca que permite a API ser consumida por páginas web externas
 *
 */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Importando as rotas da API
const routes = require('./routes')

// Importando as configurações do cors
const corsConfig = require('./cors')

const app = express()

// O método use() do express permite criar middlewares
app.use(bodyParser.json())

app.use(cors(corsConfig))

app.use(routes)

// Exportando a instância do servidor HTTP
module.exports = app
