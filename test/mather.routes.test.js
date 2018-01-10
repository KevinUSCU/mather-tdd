// const controller = require('../controllers/mather.controllers')
const app = require('../server')
const request = require('supertest')

describe('Mather Routes', () => {

  // test('It adds items in request', () => {
  //   expect(controller.addEmUp({ body: { numbers: [ 4, 55, -3 ] }}, {})).toBe({ "total": "56" })
  // })
  test('It adds items in request', (done) => {
    request(app)
      .get('/api/addems')
      .expect(200, done)
      // .end((err, res) => {
      //   if (err) return done(err)
      //   // return done()
      // })
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