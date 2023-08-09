const express = require("express");
const app = express();
const cors = require('cors')
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
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  
}));
app.use(express.json())
app.use((req,res,next)=>{
  res.locals.currentUser = 'nishanth'
  next()
})
app.get('/',(req,res)=>{
  res.status(200).json({msg:"hello welcome to  scholarConnect rest api"})
})
app.use('/profile',require('./routes/profileroutes'))
app.use('/publication',require('./routes/publicationroutes'))




app.get('/authenticate',passport.authenticate('local',{failureRedirect:'/'}),(req,res)=>{
    
})

app.listen(5000, () => {
  console.log("port running on 5000");
});
