const express = require("express")
const profileRoutes = express.Router()


profileRoutes.get('/viewprofile',(req,res)=>{
    res.send(currentUser)
})

module.exports = profileRoutes