class Mather {
  static add(...numbers) {
    return numbers.reduce((number, acc) => {
      return number + acc
    }, 0)
  }
}

module.exports = Mather