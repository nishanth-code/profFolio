const express = require('express')
const controller = require('../controllers/articlescontroller')
const asynchandler = require('../errorHandlers/asyncHandler')
const articleRouter = express.Router()


articleRouter.get('/renderAll',asynchandler(controller.renderAll))
articleRouter.get('/render/:id',asynchandler(controller.render))
articleRouter.post('/add',asynchandler(controller.addArticle))
articleRouter.put('edit/:id',asynchandler(controller.updateArticles))
articleRouter.delete('/delete/:id',asynchandler(controller.deleteArticle))

module.exports = articleRouter