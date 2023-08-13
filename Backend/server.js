const express = require("express");
const app = express();
const session = require('express-session')
const RedisStore = require('connect-redis').default
const redis = require('redis');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const profile = require("./schemas/profile");
const dbConnect = require("./utilities/dbconnect")
const crypto = require('crypto');
const cookieparser = require('cookie-parser')





dbConnect();
const jwtSecret =  crypto.randomBytes(32).toString('hex');
const jwtOptions = {
  expiresIn: '24h' 
};

//session data 
// const client = redis.createClient();
// const sessionStore = new RedisStore({ client: client });


const sessionDetails = {
  secret: 'userCredentials',
  resave: false,
  saveUninitialized: true,
  // store:sessionStore,
  cookie:{
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      maxAge: 1000*60*60*24
  }
}
app.use(session(sessionDetails))
app.use(passport.initialize());
app.use(passport.session());


passport.use(new passportLocal(profile.authenticate()));



passport.serializeUser(profile.serializeUser());
passport.deserializeUser(profile.deserializeUser());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials:true,
  
}));
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req,res,next)=>{

  
  next()
})
app.get('/',(req,res)=>{
  res.status(200).json({msg:"hello welcome to  scholarConnect rest api"})
})
app.use('/profile',require('./routes/profileroutes'))
app.use('/publication',require('./routes/publicationroutes'))
app.use('/patent',require('./routes/patentroutes'))
app.use('/article',require('./routes/articleroutes'))




app.post('/authenticate',passport.authenticate('local'),(req,res)=>{
  const user = req.user;
  const token = jwt.sign({ id: user._id }, jwtSecret, jwtOptions);
 
  
res.status(200).json({msg:'authentication sucessful',token})    
})
app.get('/logout', (req, res) => {
  // Clear the user's session
  req.logout(()=>{
    res.status(300).json('logged out sucessfully')
  });
  
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes
  
  // Set an appropriate status code for the error
  res.status(err.status || 500);
  
  // Send an error response
  res.json({
    error: {
      message: err.message || 'Internal Server Error'
    }
  });
});









app.listen(5000, () => {
  console.log("port running on 5000");
});
