const model = require('../models/mather.model')

describe('Mather Model', () => {

  describe('Add', () => {
    test('It should have an add function', () => {
      expect(typeof model.add).toBe('function')
    })
  })

})