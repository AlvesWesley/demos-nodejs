const { sequelize } = require('../app/models')
const migrate = require('./migrate')

const env = process.env.NODE_ENV

// Lista de migrations para serem executadas automaticamente em produção
const migrations = [
  '20200101024448-create-publisher',
  '20200101024457-create-author',
  '20200101024480-create-book'
]

const syncDatabase = async () => {
  if (env === 'production') {
    // Executa as migrations automaticamente em ambiente de produção
    await migrate
      .execute({ migrations, method: 'up' })
      .then(async () => sequelize.sync())
      .catch(e => console.log(e))
  }
}

module.exports = async () => {
  await syncDatabase()
}
