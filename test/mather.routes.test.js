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
  })

})

// describe('error handling', function () {
//   it('should return a JSON message when a route is not found', function (done) {
//     chai.request(app)
//       .get('/doesnotexist')
//       .end((err, res) => {
//         expect(res.status).to.equal(404)
//         expect(res.body).to.be.an('object')
//         expect(res.body.error).to.be.an('object')
//         expect(res.body.error.message).to.be.ok
//         done()
//       })
//   })