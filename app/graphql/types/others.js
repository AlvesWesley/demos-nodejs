// Tipos de retorno que não representam nenhuma entidade na aplicação

const { GraphQLObjectType, GraphQLBoolean } = require('graphql')

module.exports.Result = new GraphQLObjectType({
  name: 'Result',
  fields: {
    status: { type: GraphQLBoolean }
  }
})
