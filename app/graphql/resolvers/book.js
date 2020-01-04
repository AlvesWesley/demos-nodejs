const { Book, Author, Publisher } = require('../../models')

module.exports.getBooks = async () => {
  const docs = await Book.findAll({
    include: [{ model: Author }, { model: Publisher }]
  })
  return docs
}

module.exports.getBook = async ({ id }) => {
  const doc = await Book.findOne({
    where: { id },
    include: [{ model: Author }, { model: Publisher }]
  })
  return doc
}

module.exports.createBook = async ({ book }) => {
  const insert = await Book.create(book)
  const doc = await Book.findOne({
    where: { id: insert.id },
    include: [{ model: Author }, { model: Publisher }]
  })
  return doc
}

module.exports.updateBook = async ({ book }) => {
  await Book.update(book, { where: { id: book.id } })
  const doc = await Book.findOne({
    include: [{ model: Author }, { model: Publisher }]
  })
  return doc
}

module.exports.deleteBook = async ({ id }) => {
  const result = await Book.destroy({ where: { id } })
  return { status: !!result }
}
