class Mather {
  static add(...numbers) {
    return numbers.reduce((acc, number) => {
      return number + acc
    }, 0)
  }

  static subtract(x, ...numbers) {
    return numbers.reduce((acc, number) => {
      return acc - number
    }, x)
  }
}

module.exports = Mather