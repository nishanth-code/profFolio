
const controller = require('../controllers/patentController')
const asynchandler = require('../errorHandlers/asyncHandler')
const islogedin = require('../middlewares/isloggedin')
const express = require('express')
const patentroutes = express.Router()
patentroutes.get('/render',asynchandler(controller.renderAllPatent))
patentroutes.get('/render/:id',islogedin,asynchandler(controller.renderPatent))
patentroutes.post('/addPatent',islogedin,asynchandler(controller.addPatent))
patentroutes.put('/edit/:id',islogedin,asynchandler(controller.editPatent))
patentroutes.delete('/delete/:id',islogedin,asynchandler(controller.deletePatent))





module.exports = patentroutes
