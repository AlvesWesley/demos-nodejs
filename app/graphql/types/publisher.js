const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = require('graphql')

module.exports.Publisher = new GraphQLObjectType({
  name: 'Publisher',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  }
})

module.exports.PublisherCreate = new GraphQLInputObjectType({
  name: 'PublisherCreate',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) }
  }
})

module.exports.PublisherUpdate = new GraphQLInputObjectType({
  name: 'PublisherUpdate',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString }
  }
})
