const MatherModel = require('../models/mather.model')

class MatherControllers {

  static addEmUp(req, res, next) {
    const { numbers } = req.body
    if (!numbers) return next({ status: 400, message: 'You must provide numbers to add!' })
    const result = MatherModel.add(...numbers)
    return res.status(200).json({ total: result })
  }

}

module.exports = MatherControllers