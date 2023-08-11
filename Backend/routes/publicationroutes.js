const express = require('express')
const controller = require('../controllers/publicationController')
const asynchandler = require('../errorHandlers/asyncHandler')
const publicationRoutes = express.Router()

publicationRoutes.get('/renderAll',asynchandler(controller.renderAll))
publicationRoutes.get('/render/:id',asynchandler(controller.render))
publicationRoutes.post('/addpublication',asynchandler(controller.newPublication))
publicationRoutes.put('/edit/:id',asynchandler(controller.updatePublication))
publicationRoutes.delete('/delete/:id',asynchandler(controller.deletepublication))


module.exports = publicationRoutes

