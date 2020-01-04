module.exports.getBooks = variables => ({
  query: `
    {
      getBooks {
        id
        isbn
        title
        description
        pages
        status
        author {
          id
          name
        }
        publisher {
          id
          name
        }
      }
    }
  `,
  variables
})

module.exports.getBook = variables => ({
  query: `
    query getBook($id: ID!) {
      getBook(id: $id) {
        id
        isbn
        title
        description
        pages
        status
        author {
          id
          name
        }
        publisher {
          id
          name
        }
      }
    }
  `,
  variables
})

module.exports.createBook = variables => ({
  query: `
    mutation createBook(
      $isbn: String!
      $title: String!
      $description: String
      $pages: Int
      $status: Status
      $authorId: ID!
      $publisherId: ID!
    ) {
      createBook(book: {
        isbn: $isbn
        title: $title
        description: $description
        pages: $pages
        status: $status
        authorId: $authorId
        publisherId: $publisherId
      }) {
        id
        isbn
        title
        description
        pages
        status
        author {
          id
          name
        }
        publisher {
          id
          name
        }
      }
    }
  `,
  variables
})

module.exports.updateBook = variables => ({
  query: `
    mutation updateBook(
      $id: ID!
      $isbn: String
      $title: String
      $description: String
      $pages: Int
      $status: Status
      $authorId: ID
      $publisherId: ID
    ) {
      updateBook(book: {
        id: $id
        isbn: $isbn
        title: $title
        description: $description
        pages: $pages
        status: $status
        authorId: $authorId
        publisherId: $publisherId
      }) {
        id
        isbn
        title
        description
        pages
        status
        author {
          id
          name
        }
        publisher {
          id
          name
        }
      }
    }
  `,
  variables
})

module.exports.deleteBook = variables => ({
  query: `
    mutation deleteBook($id: ID!) {
      deleteBook(id: $id) {
        status
      }
    }
  `,
  variables
})
