const { ApolloServer } = require('apollo-server-express')
const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const schemas = require('../app/graphql/schemas')

const query = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    getAuthors: schemas.author.getAuthors,
    getPublishers: schemas.publisher.getPublishers,
    getBooks: schemas.book.getBooks,
    getBook: schemas.book.getBook
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createAuthor: schemas.author.createAuthor,
    updateAuthor: schemas.author.updateAuthor,
    deleteAuthor: schemas.author.deleteAuthor,
    createPublisher: schemas.publisher.createPublisher,
    updatePublisher: schemas.publisher.updatePublisher,
    deletePublisher: schemas.publisher.deletePublisher,
    createBook: schemas.book.createBook,
    updateBook: schemas.book.updateBook,
    deleteBook: schemas.book.deleteBook
  }
})

// Cria o schema de toda a API GraphQL
const schema = new GraphQLSchema({ query, mutation })

// Instancia o servidor GraphQL com Apollo server
module.exports = new ApolloServer({ schema })
