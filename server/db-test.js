// Arquivo de conexão com o bando de dados de teste

require('dotenv').config({ path: '.env.test' })

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false
}
