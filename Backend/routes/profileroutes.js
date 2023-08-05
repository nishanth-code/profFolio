const express = require("express")
const profileRoutes = express.Router()
const controller = require('../controllers/profileController')


profileRoutes.get('/viewprofile',controller.profilerender)
profileRoutes.post('/signup',controller.createUser)
profileRoutes.post('/sendotp',controller.sendOTP)
profileRoutes.get('/changePassword',controller.updatePassword)
profileRoutes.get('/updatePassword',controller.changePassword)
// profileRoutes.delete()

module.exports = profileRoutes