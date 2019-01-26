// Importando o ORM Sequelize e instanciando a conexão com o banco de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    dialect: 'mysql',
    operatorsAliases: false,
    define: { underscored: true }
})

// Objeto db receberá todas as configurações do Sequelize
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Importando os models que serão usados no banco de dados
db.Person = require('../app/models/person')(sequelize, Sequelize)
db.Car = require('../app/models/car')(sequelize, Sequelize)

// Realizando a associação de um para muitos entre Person e Car
db.Car.belongsTo(db.Person, {
    foreingKey: 'id_person',
    onDelete: 'CASCADE'
})
db.Person.hasMany(db.Car)

// Exportando o objeto de conexão com o bando de dados
module.exports = db
