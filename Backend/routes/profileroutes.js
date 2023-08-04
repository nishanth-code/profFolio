const express = require("express")
const profileRoutes = express.Router()
const controller = require('../controllers/profileController')


profileRoutes.get('/viewprofile',controller.profilerender)
profileRoutes.get('/signup',controller.createUser)

module.exports = profileRoutes