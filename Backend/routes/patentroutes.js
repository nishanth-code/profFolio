
const controller = require('../controllers/patentController')
const asynchandler = require('../errorHandlers/asyncHandler')
const express = require('express')
const patentroutes = express.Router()
patentroutes.get('/render',asynchandler(controller.renderAllPatent))
patentroutes.get('/render/:id',asynchandler(controller.renderPatent))
patentroutes.post('/addPatent',asynchandler(controller.addPatent))
patentroutes.put('/edit/:id',asynchandler(controller.editPatent))
patentroutes.delete('/delete/:id',asynchandler(controller.deletePatent))





module.exports = patentroutes
