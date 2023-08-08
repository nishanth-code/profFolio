const express = require("express")
const profileRoutes = express.Router()
const controller = require('../controllers/profileController')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: '../uploads/',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
const upload = multer({ storage: storage });

profileRoutes.get('/viewprofile',controller.profilerender)
profileRoutes.post('/signup',upload.single('profilePicture'),controller.createUser)
profileRoutes.post('/sendotp',controller.sendOTP)
profileRoutes.put('/changePassword',controller.updatePassword)
profileRoutes.put('/updatePassword',controller.changePassword)
profileRoutes.put('/updateProfilePic',upload.single('profilePicture'),controller.changeProfilePic)
profileRoutes.delete('/deleteProfile',controller.deleteAccount)

module.exports = profileRoutes