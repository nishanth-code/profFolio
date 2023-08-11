
const controller = require('../controllers/patentController')
const express = require('express')
const patentroutes = express.Router()
patentroutes.get('/render',controller.renderAllPatent)
patentroutes.get('/render/:id',controller.renderPatent)
patentroutes.post('/addPatent',controller.addPatent)
patentroutes.put('/edit/:id',controller.editPatent)
patentroutes.delete('/delete/:id',controller.deletePatent)





module.exports = patentroutes
