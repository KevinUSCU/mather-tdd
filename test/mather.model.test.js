const model = require('../models/mather.model')

describe('Mather Model', () => {

  describe('Add', () => {
    test('It should have an add function', () => {
      expect(typeof model.add).toBe('function')
    })
    test('It should add two numbers', () => {
      expect(model.add(1, 2)).toBe(3)
    })
  })

})