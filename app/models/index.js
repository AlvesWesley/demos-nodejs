'use strict'

const config = require('../../server/db')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config)

const db = {}

db.Author = require('./author')(sequelize, Sequelize)
db.Publisher = require('./publisher')(sequelize, Sequelize)
db.Book = require('./book')(sequelize, Sequelize)

Object.keys(db).forEach(model => db[model].associate && db[model].associate(db))

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
