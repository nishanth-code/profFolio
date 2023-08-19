const express = require("express")
const profileRoutes = express.Router()
const controller = require('../controllers/profileController')
const multer = require('multer')
const islogedin = require('../middlewares/isloggedin')
const asynchandler = require('../errorHandlers/asyncHandler')
const path = require('path')


const storage = multer.diskStorage({
    destination: '../uploads/',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  })
const upload = multer({ storage: storage });

profileRoutes.get('/viewprofile',islogedin,asynchandler(controller.profilerender))
profileRoutes.get('/publication',islogedin,asynchandler(controller.renderPublication))
profileRoutes.get('/article',islogedin,asynchandler(controller.renderArticle))
profileRoutes.get('/patent',islogedin,asynchandler(controller.renderPatent))
profileRoutes.get('/workshop',islogedin,asynchandler(controller.renderWorkshop))
profileRoutes.post('/signup',upload.single('profilePicture'),asynchandler(controller.createUser))
profileRoutes.post('/sendotp',asynchandler(controller.sendOTP))
profileRoutes.post('/verifyotp',asynchandler(controller.verifyotp))
profileRoutes.put('/changePassword/:id',asynchandler(controller.updatePassword))
profileRoutes.put('/updatePassword',asynchandler(controller.changePassword))
profileRoutes.put('/updateProfile',islogedin,upload.single('profilePicture'),asynchandler(controller.updateprofile))
profileRoutes.delete('/deleteProfile',asynchandler(controller.deleteAccount))

module.exports = profileRoutes