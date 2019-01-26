// Importa a instância de conexão com o banco de dados
const db = require('../../config/sequelize')

/**
 *
 * Controller com as cinco operações principais.
 * Caso ocorra algum erro com a operação no banco de dados
 * o código entra no bloco catch e retornará um erro 500 para os client
 *
 */

// Lista os dados de todos os carros
module.exports.index = async (req, res) => {
    try {
        const cars = await db.Car.findAll()
        res.json(cars)
    } catch (e) {
        res.status(500).end()
    }
}

// Busca os dados de um carro e seu dono através do seu ID
module.exports.show = async (req, res) => {
    try {
        const car = await db.Car.findByPk(req.params.id, {
            include: [{ model: db.Person }]
        })
        res.json(car)
    } catch (e) {
        res.status(500).end()
    }
}

// Insere um novo registro de carro
module.exports.store = async (req, res) => {
    try {
        const car = await db.Car.create(req.body)
        res.json(car)
    } catch (e) {
        res.status(500).end()
    }
}

// Atualiza os dados de um carro
module.exports.update = async (req, res) => {
    try {
        await db.Car.update(req.body, { where: { id: req.params.id } })
        const car = await db.Car.findByPk(req.params.id)
        res.json(car)
    } catch (e) {
        res.status(500).end()
    }
}

// Remove os dados de um carro
module.exports.destroy = async (req, res) => {
    try {
        await db.Car.destroy({ where: { id: req.params.id } })
        res.json({})
    } catch (e) {
        res.status(500).end()
    }
}
