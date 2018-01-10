const MatherModel = require('../models/mather.model')

class MatherControllers {

  static getAddEmUp(req, res, next) {
    const numbers = [1,2,3]
    const result = MatherModel.add([numbers])
    return res.status(200).json({ total: result })
  }

  static addEmUp(req, res, next) {
    const { numbers } = req.body
    const result = MatherModel.add([numbers])
    return res.status(200).json({ total: result })
  }

}

module.exports = MatherControllers