const { GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql')
const resolvers = require('../resolvers/author')
const types = require('../types/author')
const otherTypes = require('../types/others')

module.exports.getAuthors = {
  type: GraphQLList(types.Author),
  resolve() {
    return resolvers.getAuthors()
  }
}

module.exports.createAuthor = {
  type: types.Author,
  args: { author: { type: types.AuthorCreate } },
  resolve(_, args) {
    return resolvers.createAuthor(args)
  }
}

module.exports.updateAuthor = {
  type: types.Author,
  args: { author: { type: types.AuthorUpdate } },
  resolve(_, args) {
    return resolvers.updateAuthor(args)
  }
}

module.exports.deleteAuthor = {
  type: otherTypes.Result,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(_, args) {
    return resolvers.deleteAuthor(args)
  }
}
