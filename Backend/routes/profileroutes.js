const express = require("express")
const profileRoutes = express.Router()
const controller = require('../controllers/profileController')


profileRoutes.get('/viewprofile',controller.profilerender)
profileRoutes.post('/signup',controller.createUser)
profileRoutes.get('/sendotp',controller.sendOTP)
profileRoutes.put('/updatePassword',)

module.exports = profileRoutes