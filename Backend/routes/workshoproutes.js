const express = require('express')
const controller = require('../controllers/workshopController')
const asynchandler = require('../errorHandlers/asyncHandler')
const workshopRoutes = express.Router()


module.exports = workshopRoutes