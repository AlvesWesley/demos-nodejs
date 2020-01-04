const { GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql')
const resolvers = require('../resolvers/book')
const types = require('../types/book')
const otherTypes = require('../types/others')

module.exports.getBooks = {
  type: GraphQLList(types.Book),
  resolve() {
    return resolvers.getBooks()
  }
}

module.exports.getBook = {
  type: types.Book,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(_, args) {
    return resolvers.getBook(args)
  }
}

module.exports.createBook = {
  type: types.Book,
  args: { book: { type: types.BookCreate } },
  resolve(_, args) {
    return resolvers.createBook(args)
  }
}

module.exports.updateBook = {
  type: types.Book,
  args: { book: { type: types.BookUpdate } },
  resolve(_, args) {
    return resolvers.updateBook(args)
  }
}

module.exports.deleteBook = {
  type: otherTypes.Result,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(_, args) {
    return resolvers.deleteBook(args)
  }
}
