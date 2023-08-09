const express = require('express')
const controller = require('../controllers/publicationController')
const publicationRoutes = express.Router()

publicationRoutes.get('/renderAll',controller.renderAll)
publicationRoutes.get('/render/:id',controller.render)
publicationRoutes.post('/addpublication',controller.newPublication)
publicationRoutes.put('/edit/:id',controller.updatePublication)
publicationRoutes.delete('/delete/:id',controller.deletepublication)


module.exports = publicationRoutes

