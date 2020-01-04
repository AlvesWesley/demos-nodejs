require('dotenv').config({ path: '.env.test' })
const chai = require('chai')
const chaiHTTP = require('chai-http')

const app = require('../../app')
const { Publisher } = require('../../app/models')
const data = require('../data/publisher')
const {
  getPublishers,
  createPublisher,
  updatePublisher,
  deletePublisher
} = require('../gql/publisher')

const { expect } = chai
const url = '/graphql'

chai.use(chaiHTTP)

describe('Test Publisher', () => {
  it('must get an array with publisher object', async () => {
    await Publisher.create(data[0])
    const body = getPublishers()
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.getPublishers).to.be.a('array')
    expect(response.body.data.getPublishers[0].id).to.be.a('string')
    expect(response.body.data.getPublishers[0].name).to.be.a('string')
  })

  it('must create an publisher and return the registry', async () => {
    const variables = data[0]
    const body = createPublisher(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.createPublisher).to.be.a('object')
    expect(response.body.data.createPublisher.id).to.be.a('string')
    expect(response.body.data.createPublisher.name).to.be.a('string')
  })

  it('must update an publisher and return the registry', async () => {
    const doc = await Publisher.create(data[0])
    const variables = { id: doc.id, name: 'New Name' }
    const body = updatePublisher(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.updatePublisher).to.be.a('object')
    expect(response.body.data.updatePublisher.id).to.be.a('string')
    expect(response.body.data.updatePublisher.name).to.be.a('string')
    expect(response.body.data.updatePublisher.name).to.be.equal(variables.name)
  })

  it('must delete registry and return boolean status', async () => {
    const doc = await Publisher.create(data[0])
    const variables = { id: doc.id }
    const body = deletePublisher(variables)
    const response = await chai
      .request(app)
      .post(url)
      .send(body)

    expect(response.status).to.be.equal(200)
    expect(response.body.data.deletePublisher.status).to.be.equal(true)
  })
})
