/**
 *
 * Importando o express para que seja usado o método Router() para
 * criar as rotas da API
 *
 */
const express = require('express')
const route = express.Router()

// Importando os controllers de cada entidade
const person = require('../app/controllers/person')
const car = require('../app/controllers/car')

// Rotas do recurso person
route.get('/person', person.index)
route.get('/person/:id', person.show)
route.post('/person', person.store)
route.put('/person/:id', person.update)
route.delete('/person/:id', person.destroy)

// Rotas do recurso car
route.get('/car', car.index)
route.get('/car/:id', car.show)
route.post('/car', car.store)
route.put('/car/:id', car.update)
route.delete('/car/:id', car.destroy)

/**
 *
 * Caso o servidor receba uma requisição para uma rota que não exista
 * o servidor retornará um erro 404 para o client
 *
 */
route.all('*', (_, res) => res.status(404).end())

// Exportando todas as rotas deste arquivo
module.exports = route
