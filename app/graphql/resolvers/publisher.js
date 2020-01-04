const { Publisher } = require('../../models')

module.exports.getPublishers = async () => {
  const docs = await Publisher.findAll()
  return docs
}

module.exports.createPublisher = async ({ publisher }) => {
  const doc = await Publisher.create(publisher)
  return doc
}

module.exports.updatePublisher = async ({ publisher }) => {
  const doc = await Publisher.update(publisher, {
    where: { id: publisher.id },
    returning: true
  })
  return doc[0] ? doc[1][0] : null
}

module.exports.deletePublisher = async ({ id }) => {
  const result = await Publisher.destroy({ where: { id } })
  return { status: !!result }
}
