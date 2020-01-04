const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const cors = require('cors')
const graphql = require('./graphql')
const init = require('./init')

const app = express()
const isDev = process.env.NODE_ENV === 'development'

// Função que irá executar as operações iniciais da aplicação
init()

if (isDev) app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression())
app.use(cors())

// Integrando o Apollo server ao servidor Express
graphql.applyMiddleware({ app, path: '/graphql' })

module.exports = app
