const Umzug = require('umzug')
const { sequelize } = require('../app/models')

// Configuração do Umzug para execução das migrations
const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: { sequelize },
  migrations: {
    params: [sequelize.getQueryInterface(), sequelize.constructor],
    path: './app/migrations',
    pattern: /\.js$/
  }
})

module.exports = umzug
