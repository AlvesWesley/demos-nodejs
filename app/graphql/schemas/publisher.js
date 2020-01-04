const { GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql')
const resolvers = require('../resolvers/publisher')
const types = require('../types/publisher')
const otherTypes = require('../types/others')

module.exports.getPublishers = {
  type: GraphQLList(types.Publisher),
  resolve() {
    return resolvers.getPublishers()
  }
}

module.exports.createPublisher = {
  type: types.Publisher,
  args: { publisher: { type: types.PublisherCreate } },
  resolve(_, args) {
    return resolvers.createPublisher(args)
  }
}

module.exports.updatePublisher = {
  type: types.Publisher,
  args: { publisher: { type: types.PublisherUpdate } },
  resolve(_, args) {
    return resolvers.updatePublisher(args)
  }
}

module.exports.deletePublisher = {
  type: otherTypes.Result,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(_, args) {
    return resolvers.deletePublisher(args)
  }
}
