module.exports.getPublishers = variables => ({
  query: `
    {
      getPublishers {
        id
        name
      }
    }
  `,
  variables
})

module.exports.createPublisher = variables => ({
  query: `
    mutation createPublisher($name: String!) {
      createPublisher(publisher: { name: $name }) {
        id
        name
      }
    }
  `,
  variables
})

module.exports.updatePublisher = variables => ({
  query: `
    mutation updatePublisher($id: ID!, $name: String!) {
      updatePublisher(publisher: { id: $id, name: $name }) {
        id
        name
      }
    }
  `,
  variables
})

module.exports.deletePublisher = variables => ({
  query: `
    mutation deletePublisher($id: ID!) {
      deletePublisher(id: $id) {
        status
      }
    }
  `,
  variables
})
