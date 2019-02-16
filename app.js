// Importa as variáveis de ambiente
require('dotenv').config()
const app = require('./config/server')
const db = require('./config/sequelize')
// Guarda a variável de ambiente PORT dentro de uma constante
const port = process.env.PORT

try {
  // Faz a sincronização com o banco de dados antes de iniciar a aplicação
  db.sequelize.sync()
  app.listen(port, () => console.log('Application online:', port))
} catch (e) {
  console.log(e)
}
