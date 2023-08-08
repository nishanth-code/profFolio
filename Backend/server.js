const express = require("express");
const app = express();
const session = require('express-session')
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const profile = require("./schemas/profile");
const dbConnect = require("./utilities/dbconnect")



dbConnect();

//session data 

const sessionDetails = {
  secret: 'userCredentials',
  resave: false,
  saveUninitialized: true,
  cookie:{
      httpOnly: true,
      expires: Date.now() + (1000*60*60*24),
      maxAge: 1000*60*60*24
  }
}

passport.use(new passportLocal(profile.authenticate()));
app.use(passport.initialize());
app.use(session(sessionDetails))
passport.serializeUser(profile.serializeUser());
passport.deserializeUser(profile.deserializeUser());
app.use((req,res,next)=>{
  res.locals.currentUser = 'hello'
  next()
})
app.get('/',(req,res)=>{
  res.status(200).json({msg:"hello welcome to rest api"})
})
app.use('/profile',require('./routes/profileroutes'))




app.get('/authenticate',passport.authenticate('local',{failureRedirect:'/'}),(req,res)=>{
    
})

app.listen(5000, () => {
  console.log("port running on 5000");
});
