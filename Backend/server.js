const express = require('express')
const app = express()
const passport = require('passport')
const passportLocal = require('passport-local')
const profile = require('./schemas/profile')



passport.serializeUser(profile.serializeUser())
passport.deserializeUser(profile.deserializeUser())

app.get('/',(req,res)=>{
    res.status(200).json({msg:"hello welcome to rest api"})
})
app.post('/newuser',(req,res)=>{
  const newuser = req.body
  const register = new profile.register(newuser,req.body.password)
})
app.get('/authenticate',passport.authenticate('local',{failureRedirect:'/'}),(req,res)=>{
    
})
app.listen(5000,()=>{
    console.log("port running on 5000")
})