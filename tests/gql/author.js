module.exports.getAuthors = variables => ({
  query: `
    {
      getAuthors {
        id
        name
      }
    }
  `,
  variables
})

module.exports.createAuthor = variables => ({
  query: `
    mutation createAuthor($name: String!) {
      createAuthor(author: { name: $name }) {
        id
        name
      }
    }
  `,
  variables
})

module.exports.updateAuthor = variables => ({
  query: `
    mutation updateAuthor($id: ID!, $name: String!) {
      updateAuthor(author: { id: $id, name: $name }) {
        id
        name
      }
    }
  `,
  variables
})

module.exports.deleteAuthor = variables => ({
  query: `
    mutation deleteAuthor($id: ID!) {
      deleteAuthor(id: $id) {
        status
      }
    }
  `,
  variables
})
