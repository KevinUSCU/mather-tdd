const MatherModel = require('../models/mather.model')

class MatherControllers {

  static addEmUp(req, res, next) {
    const { numbers } = req.body
    const result = MatherModel.add(...numbers)
    return res.status(200).json({ total: result })
  }

}

module.exports = MatherControllers