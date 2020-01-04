require('dotenv').config({ path: '.env.test' })
const chai = require('chai')
const chaiHTTP = require('chai-http')

const app = require('../../app')
const { Book, Author, Publisher } = require('../../app/models')
const data = require('../data/book')
const dataAuthor = require('../data/author')
const dataPublisher = require('../data/publisher')
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
} = require('../gql/book')

const { expect } = chai
const url = '/graphql'

chai.use(chaiHTTP)

describe('Test Book', () => {
  it('must get an array with book object', async () => {
    const author = await Author.create(dataAuthor[0])
    const publisher = await Publisher.create(dataPublisher[0])
    await Book.create({
      ...data[0],
      authorId: author.id,
      publisherId: publisher.id
    })
    const body = getBooks()
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.getBooks).to.be.a('array')
    expect(response.body.data.getBooks[0].id).to.be.a('string')
    expect(response.body.data.getBooks[0].isbn).to.be.a('string')
    expect(response.body.data.getBooks[0].title).to.be.a('string')
    expect(response.body.data.getBooks[0].description).to.be.a('string')
    expect(response.body.data.getBooks[0].pages).to.be.a('number')
    expect(response.body.data.getBooks[0].status).to.be.a('string')
    expect(response.body.data.getBooks[0].author).to.be.a('object')
    expect(response.body.data.getBooks[0].author.id).to.be.a('string')
    expect(response.body.data.getBooks[0].author.name).to.be.a('string')
    expect(response.body.data.getBooks[0].publisher).to.be.a('object')
    expect(response.body.data.getBooks[0].publisher.id).to.be.a('string')
    expect(response.body.data.getBooks[0].publisher.name).to.be.a('string')
  })

  it('must get a book object', async () => {
    const author = await Author.create(dataAuthor[0])
    const publisher = await Publisher.create(dataPublisher[0])
    const book = await Book.create({
      ...data[0],
      authorId: author.id,
      publisherId: publisher.id
    })
    const variables = { id: book.id }
    const body = getBook(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.getBook).to.be.a('object')
    expect(response.body.data.getBook.id).to.be.a('string')
    expect(response.body.data.getBook.isbn).to.be.a('string')
    expect(response.body.data.getBook.title).to.be.a('string')
    expect(response.body.data.getBook.description).to.be.a('string')
    expect(response.body.data.getBook.pages).to.be.a('number')
    expect(response.body.data.getBook.status).to.be.a('string')
    expect(response.body.data.getBook.author).to.be.a('object')
    expect(response.body.data.getBook.author.id).to.be.a('string')
    expect(response.body.data.getBook.author.name).to.be.a('string')
    expect(response.body.data.getBook.publisher).to.be.a('object')
    expect(response.body.data.getBook.publisher.id).to.be.a('string')
    expect(response.body.data.getBook.publisher.name).to.be.a('string')
  })

  it('must create an book and return the registry', async () => {
    const author = await Author.create(dataAuthor[0])
    const publisher = await Publisher.create(dataPublisher[0])
    const variables = {
      ...data[0],
      authorId: author.id,
      publisherId: publisher.id
    }
    const body = createBook(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.createBook).to.be.a('object')
    expect(response.body.data.createBook.id).to.be.a('string')
    expect(response.body.data.createBook.isbn).to.be.a('string')
    expect(response.body.data.createBook.title).to.be.a('string')
    expect(response.body.data.createBook.description).to.be.a('string')
    expect(response.body.data.createBook.pages).to.be.a('number')
    expect(response.body.data.createBook.status).to.be.a('string')
    expect(response.body.data.createBook.author).to.be.a('object')
    expect(response.body.data.createBook.author.id).to.be.a('string')
    expect(response.body.data.createBook.author.name).to.be.a('string')
    expect(response.body.data.createBook.publisher).to.be.a('object')
    expect(response.body.data.createBook.publisher.id).to.be.a('string')
    expect(response.body.data.createBook.publisher.name).to.be.a('string')
  })

  it('must update an book and return the registry', async () => {
    const author = await Author.create(dataAuthor[0])
    const publisher = await Publisher.create(dataPublisher[0])
    const book = await Book.create({
      ...data[0],
      authorId: author.id,
      publisherId: publisher.id
    })
    const variables = { id: book.id, description: 'New description' }
    const body = updateBook(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.updateBook).to.be.a('object')
    expect(response.body.data.updateBook.id).to.be.a('string')
    expect(response.body.data.updateBook.isbn).to.be.a('string')
    expect(response.body.data.updateBook.title).to.be.a('string')
    expect(response.body.data.updateBook.description).to.be.a('string')
    expect(response.body.data.updateBook.pages).to.be.a('number')
    expect(response.body.data.updateBook.status).to.be.a('string')
    expect(response.body.data.updateBook.author).to.be.a('object')
    expect(response.body.data.updateBook.author.id).to.be.a('string')
    expect(response.body.data.updateBook.author.name).to.be.a('string')
    expect(response.body.data.updateBook.publisher).to.be.a('object')
    expect(response.body.data.updateBook.publisher.id).to.be.a('string')
    expect(response.body.data.updateBook.publisher.name).to.be.a('string')
    expect(response.body.data.updateBook.description).to.be.equal(
      variables.description
    )
  })

  it('must delete registry and return boolean status', async () => {
    const author = await Author.create(dataAuthor[0])
    const publisher = await Publisher.create(dataPublisher[0])
    const book = await Book.create({
      ...data[0],
      authorId: author.id,
      publisherId: publisher.id
    })
    const variables = { id: book.id }
    const body = deleteBook(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.deleteBook.status).to.be.equal(true)
  })
})
