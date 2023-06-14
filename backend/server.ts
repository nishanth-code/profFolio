import express,{Request,Response,Application} from 'express'
import mongoose from 'mongoose'
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { credentialModel as credential,credentials } from './schemas/credential'; 

const app:Application = express()

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(credential.authenticate()));
 
 passport.serializeUser(credential.serializeUser());
 
 passport.deserializeUser(credential.deserializeUser());



mongoose.connect('mongodb+srv://nishanth:nish1234@cluster0.bbodeek.mongodb.net/profFolio')
  .then(() => {
    console.log('db connected');
  })
  .catch((error) => {
    console.error('connection error:', error);
  });


app.get("/",(req:Request,res:Response)=>{
   
})



app.listen(8000,():void=>{
   console.log('connection is ready')
})