const { Author } = require('../../models')

module.exports.getAuthors = async () => {
  const docs = await Author.findAll()
  return docs
}

module.exports.createAuthor = async ({ author }) => {
  const doc = await Author.create(author)
  return doc
}

module.exports.updateAuthor = async ({ author }) => {
  const doc = await Author.update(author, {
    where: { id: author.id },
    returning: true
  })
  return doc[0] ? doc[1][0] : null
}

module.exports.deleteAuthor = async ({ id }) => {
  const result = await Author.destroy({ where: { id } })
  return { status: !!result }
}
