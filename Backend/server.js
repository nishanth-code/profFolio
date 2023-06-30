const express = require('express')
const app = express()
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const profile = require('./schemas/profile')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nishanth:nish1234@cluster0.bbodeek.mongodb.net/scholarConnect',{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error',console.error.bind('connectionerr:'))
db.once('open',()=>{console.log('db connected')})

passport.use(new passportLocal(profile.authenticate()));

app.use(passport.initialize());
// app.use(passport.session());

passport.serializeUser(profile.serializeUser())
passport.deserializeUser(profile.deserializeUser())

app.get('/',(req,res)=>{
    res.status(200).json({msg:"hello welcome to rest api"})
})
app.post('/newuser',async(req,res)=>{
  const newuser = new profile({username:'nishanth',email:'nishanthnavneeth200@gmail.com',phoneNumber:8151976405})
  const register = await profile.register(newuser,'nish@9741')
  console.log(register)
})
app.get('/authenticate',passport.authenticate('local',{failureRedirect:'/'}),(req,res)=>{
    
})
app.listen(5000,()=>{
    console.log("port running on 5000")
})