require('dotenv').config({ path: '.env.test' })

const { Author, Book, Publisher } = require('../app/models')

// Executa antes de cada teste. Limpa o banco de dados para não interferir nos testes seguintes
beforeEach(() => {
  Author.destroy({ where: {} })
  Book.destroy({ where: {} })
  Publisher.destroy({ where: {} })
})
