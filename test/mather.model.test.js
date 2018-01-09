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

  describe('Subtract', () => {
    test('It should have a subtract function', () => {
      expect(typeof model.subtract).toBe('function')
    })
    test('It should subtract a number from a number', () => {
      expect(model.subtract(5, 2)).toBe(3)
    })
    test('It should subtract any number of numbers from the first', () => {
      expect(model.subtract(1)).toBe(1)
      expect(model.subtract(1, 2, 10)).toBe(-11)
      expect(model.subtract(3, 7, -5, 19, 25, -12)).toBe(-31)
    })
  })

})