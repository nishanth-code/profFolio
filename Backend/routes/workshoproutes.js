const express = require('express')
const controller = require('../controllers/workshopController')
const islogedin = require('../middlewares/isloggedin')
const asynchandler = require('../errorHandlers/asyncHandler')
const workshopRoutes = express.Router()
workshopRoutes.get('/render',asynchandler(controller.renderAll))
workshopRoutes.get('/render/:id',asynchandler(controller.render))
workshopRoutes.post('/add',islogedin,asynchandler(controller.addWorkshop))
workshopRoutes.put('/edit/:id',islogedin,asynchandler(controller.editWorkshop))
workshopRoutes.delete('/delete/:id',islogedin,asynchandler(controller.deleteWorkshop))



module.exports = workshopRoutes