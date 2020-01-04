const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = require('graphql')

module.exports.Author = new GraphQLObjectType({
  name: 'Author',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  }
})

module.exports.AuthorCreate = new GraphQLInputObjectType({
  name: 'AuthorCreate',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) }
  }
})

module.exports.AuthorUpdate = new GraphQLInputObjectType({
  name: 'AuthorUpdate',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString }
  }
})
