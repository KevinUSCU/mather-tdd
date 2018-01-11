// const controller = require('../controllers/mather.controllers')
const app = require('../server')
const request = require('supertest')

describe('Mather Routes', () => {

  describe('ROUTER', () => {
    test('It returns 404 for a bad route', (done) => {
      request(app)
        .get('/bad')
        .expect(404, done)
    })

    test('It returns an error message for a bad route', (done) => {
      request(app)
        .get('/bad')
        .expect(res => {
          if (!res.body.message) throw new Error('Error message is not present')
        })
        .end(done)
    })
  })

  describe('POST /addem', () => {

    test('It adds items in request', (done) => {
      request(app)
        .post('/api/addem')
        .send({ numbers: [4, 55, -3] })
        .expect(200, { total: 56 }, done)
    })

    test('It throws an error if input is not provided', (done) => {
      request(app)
        .post('/api/addem')
        .send({ })
        .expect(400, done)
    })
  })

})