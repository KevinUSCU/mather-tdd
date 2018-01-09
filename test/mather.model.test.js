const model = require('../models/mather.model')

describe('Mather Model', () => {

  describe('Add', () => {
    test('It should have an add function', () => {
      expect(typeof model.add).toBe('function')
    })
    test('It should add two numbers', () => {
      expect(model.add(1, 2)).toBe(3)
    })
    test('It should add any number of numbers', () => {
      expect(model.add(1)).toBe(1)
      expect(model.add(1, 2, 10)).toBe(13)
      expect(model.add(3, 7, -5, 19, 25, -12)).toBe(37)
    })
  })

})