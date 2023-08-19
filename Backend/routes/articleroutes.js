const express = require('express')
const controller = require('../controllers/articlescontroller')
const asynchandler = require('../errorHandlers/asyncHandler')
const islogedin = require('../middlewares/isloggedin')
const articleRouter = express.Router()


articleRouter.get('/renderAll',islogedin,asynchandler(controller.renderAll))
articleRouter.get('/render/:id',islogedin,asynchandler(controller.render))
articleRouter.post('/add',islogedin,asynchandler(controller.addArticle))
articleRouter.put('/edit/:id',islogedin,asynchandler(controller.updateArticles))
articleRouter.delete('/delete/:id',islogedin,asynchandler(controller.deleteArticle))

module.exports = articleRouter