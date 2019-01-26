// O dotenv permite que a aplicação entenda os dados do arquivo .env
require('dotenv').config()

//Importando a instância do servidor HTTP
const app = require('./config/server')
// Importando a instância de conexão com o banco de dados
const db = require('./config/sequelize')

/**
 *
 * Recebendo a porta de operação do servidor através de uma variável de
 * ambiente. Caso não tenha sido definida a variável port receberá o valor 80
 *
 */
const port = process.env.PORT || 80

/**
 *
 * A aplicação tentará sincronizar com o banco de dados e iniciador o serviço,
 * caso não consiga o código irá para o bloco catch e imprimirá o erro no
 * console
 *
 */
try {
    // Parâmetro { alter: true } força o Sequelize atualizar sem excluir as estrutura
    db.sequelize.sync({ alter: true })
    app.listen(port, () => console.log('Server online:', port))
} catch (e) {
    console.log(e)
}
