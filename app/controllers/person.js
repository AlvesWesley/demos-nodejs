// Importa a instância de conexão com o banco de dados
const db = require('../../config/sequelize')

/**
 *
 * Controller com as cinco operações principais.
 * Caso ocorra algum erro com a operação no banco de dados
 * o código entra no bloco catch e retornará um erro 500 para os client
 *
 */

// Lista os dados de todas as pessoas
module.exports.index = async (req, res) => {
    try {
        const persons = await db.Person.findAll()
        res.json(persons)
    } catch (e) {
        res.status(500).end()
    }
}

// Busca os dados de uma pessoa e todos os seus carros através do seu ID
module.exports.show = async (req, res) => {
    try {
        const person = await db.Person.findByPk(req.params.id, {
            include: [{ model: db.Car }]
        })
        res.json(person)
    } catch (e) {
        res.status(500).end()
    }
}

// Insere um novo registro de pessoa
module.exports.store = async (req, res) => {
    try {
        const person = await db.Person.create(req.body)
        res.json(person)
    } catch (e) {
        res.status(500).end()
    }
}

// Atualiza os dados de uma pessoa
module.exports.update = async (req, res) => {
    try {
        await db.Person.update(req.body, { where: { id: req.params.id } })
        const person = await db.Person.findByPk(req.params.id)
        res.json(person)
    } catch (e) {
        res.status(500).end()
    }
}

// Remove os daods de uma pessoa
module.exports.destroy = async (req, res) => {
    try {
        await db.Person.destroy({ where: { id: req.params.id } })
        res.json({})
    } catch (e) {
        res.status(500).end()
    }
}
