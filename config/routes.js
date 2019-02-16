const express = require('express')
const router = express.Router()
// Importando os controllers
const home = require('../app/controllers/home')
const user = require('../app/controllers/user')
const todo = require('../app/controllers/todo')
// Importando o middleware de autenticação
const auth = require('../app/middlewares/auth')

// Rotas sem controle de autenticação
router.get('/', home.login)
router.get('/subscribe', home.subscribe)

// Rotas para controle de usuários e sessão
router.post('/user/create', user.createUser)
router.post('/user/session', user.createSession)
router.get('/logout', auth, user.destroySession)

// Rotas CRUD de todos
router.get('/todos', auth, todo.enables)
router.get('/todos/completed', auth, todo.completed)
router.post('/todos/create', auth, todo.create)
router.post('/todos/update', auth, todo.update)
router.post('/todos/destroy', auth, todo.destroy)

/**
 *
 * Redireciona requisições para /todos quando são enviadas
 * para rotas que não existem
 *
 */
router.all('*', (_, res) => res.redirect('/todos'))

module.exports = router
