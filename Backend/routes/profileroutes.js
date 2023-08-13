const express = require("express")
const profileRoutes = express.Router()
const controller = require('../controllers/profileController')
const multer = require('multer')
const islogedin = require('../middlewares/isloggedin')
const asynchandler = require('../errorHandlers/asyncHandler')


const storage = multer.diskStorage({
    destination: '../uploads/',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  })
const upload = multer({ storage: storage });

profileRoutes.get('/viewprofile',islogedin,asynchandler(controller.profilerender))
profileRoutes.get('/publication',islogedin,asynchandler(controller.renderPublication))
profileRoutes.post('/signup',upload.single('profilePicture'),asynchandler(controller.createUser))
profileRoutes.post('/sendotp',asynchandler(controller.sendOTP))
profileRoutes.post('/verifyotp',asynchandler(controller.verifyotp))
profileRoutes.put('/changePassword',asynchandler(controller.updatePassword))
profileRoutes.put('/updatePassword',asynchandler(controller.changePassword))
profileRoutes.put('/updateProfilePic',upload.single('profilePicture'),asynchandler(controller.changeProfilePic))
profileRoutes.delete('/deleteProfile',asynchandler(controller.deleteAccount))

module.exports = profileRoutes