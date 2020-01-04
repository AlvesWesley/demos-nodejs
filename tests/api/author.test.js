require('dotenv').config({ path: '.env.test' })
const chai = require('chai')
const chaiHTTP = require('chai-http')

const app = require('../../app')
const { Author } = require('../../app/models')
const data = require('../data/author')
const {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require('../gql/author')

const { expect } = chai
const url = '/graphql'

chai.use(chaiHTTP)

describe('Test Author', () => {
  it('must get an array with author object', async () => {
    await Author.create(data[0])
    const body = getAuthors()
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.getAuthors).to.be.a('array')
    expect(response.body.data.getAuthors[0].id).to.be.a('string')
    expect(response.body.data.getAuthors[0].name).to.be.a('string')
  })

  it('must create an author and return the registry', async () => {
    const variables = data[0]
    const body = createAuthor(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.createAuthor).to.be.a('object')
    expect(response.body.data.createAuthor.id).to.be.a('string')
    expect(response.body.data.createAuthor.name).to.be.a('string')
  })

  it('must update an author and return the registry', async () => {
    const doc = await Author.create(data[0])
    const variables = { id: doc.id, name: 'New Name' }
    const body = updateAuthor(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.updateAuthor).to.be.a('object')
    expect(response.body.data.updateAuthor.id).to.be.a('string')
    expect(response.body.data.updateAuthor.name).to.be.a('string')
    expect(response.body.data.updateAuthor.name).to.be.equal(variables.name)
  })

  it('must delete registry and return boolean status', async () => {
    const doc = await Author.create(data[0])
    const variables = { id: doc.id }
    const body = deleteAuthor(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.deleteAuthor.status).to.be.equal(true)
  })
})
