class Mather {
  static add(...numbers) {
    return numbers.reduce((number, acc) => {
      return number + acc
    }, 0)
  }

  static subtract() {}
}

module.exports = Mather