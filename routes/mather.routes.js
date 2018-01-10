const express = require('express')
const router = express.Router()
const MatherControllers = require('../controllers/mather.controllers')

router.get('/addem', MatherControllers.getAddEmUp)

router.post('/addem', MatherControllers.addEmUp)

module.exports = router