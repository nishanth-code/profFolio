const express = require('express')
const controller = require('../controllers/workshopController')
const asynchandler = require('../errorHandlers/asyncHandler')
const workshopRoutes = express.Router()
workshopRoutes.get('/render',controller.renderAll)
workshopRoutes.get('/render/:id',controller.render)
workshopRoutes.post('/add',controller.addWorkshop)
workshopRoutes.put('/edit/:id',controller.editWorkshop)
workshopRoutes.delete('/delete/:id',controller.deleteWorkshop)



module.exports = workshopRoutes