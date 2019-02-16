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

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Importando os models
const User = require('../app/models/user')(sequelize, Sequelize)
const Todo = require('../app/models/todo')(sequelize, Sequelize)

db.User = User
db.Todo = Todo

// Relacionando os models
Todo.belongsTo(User, {
  onDelete: 'CASCADE'
})
User.hasMany(Todo)

module.exports = db
