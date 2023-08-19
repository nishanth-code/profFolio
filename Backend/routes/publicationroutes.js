const express = require('express')
const controller = require('../controllers/publicationController')
const asynchandler = require('../errorHandlers/asyncHandler')
const islogedin = require('../middlewares/isloggedin')
const publicationRoutes = express.Router()

publicationRoutes.get('/renderAll',asynchandler(controller.renderAll))
publicationRoutes.get('/render/:id',asynchandler(controller.render))
publicationRoutes.post('/addpublication',islogedin,asynchandler(controller.newPublication))
publicationRoutes.put('/edit/:id',islogedin,asynchandler(controller.updatePublication))
publicationRoutes.delete('/delete/:id',islogedin,asynchandler(controller.deletepublication))


module.exports = publicationRoutes

