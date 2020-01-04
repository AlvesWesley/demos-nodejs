const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType
} = require('graphql')
const { Author } = require('./author')
const { Publisher } = require('./publisher')

// Cria valor fixos para um campo
const Status = new GraphQLEnumType({
  name: 'Status',
  values: {
    not_read: { value: 'not_read' },
    reading: { value: 'reading' },
    read: { value: 'read' }
  }
})

module.exports.Book = new GraphQLObjectType({
  name: 'Book',
  fields: {
    id: { type: GraphQLID },
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    pages: { type: GraphQLInt },
    status: { type: Status },
    author: { type: Author },
    publisher: { type: Publisher }
  }
})

module.exports.BookCreate = new GraphQLInputObjectType({
  name: 'BookCreate',
  fields: {
    isbn: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    pages: { type: GraphQLInt },
    status: { type: Status },
    authorId: { type: GraphQLNonNull(GraphQLID) },
    publisherId: { type: GraphQLNonNull(GraphQLID) }
  }
})

module.exports.BookUpdate = new GraphQLInputObjectType({
  name: 'BookUpdate',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    pages: { type: GraphQLInt },
    status: { type: Status },
    authorId: { type: GraphQLID },
    publisherId: { type: GraphQLID }
  }
})
