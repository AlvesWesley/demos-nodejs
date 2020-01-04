// Arquivo de conexão com o bando de dados principal

require('dotenv').config()

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'development' ? console.log : false
}
