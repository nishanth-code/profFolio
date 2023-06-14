import express,{Request,Response,Application} from 'express'
import mongoose from 'mongoose'
import passport,{PassportStatic}from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import credential from './schemas/credential'; 
type User = {
   _id?:String,
   

  
  
}


const app:Application = express()

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(credential.authenticate()));

passport.serializeUser((user:User, done) => {
   done(null, user._id);
 });
passport.deserializeUser((id, done) => {
   credential.findById(id, (err: Error, user: User | null) => {
     done(err, user);
   });
 });



mongoose.connect('mongodb+srv://nishanth:nish1234@cluster0.bbodeek.mongodb.net/profFolio')
  .then(() => {
    console.log('db connected');
  })
  .catch((error) => {
    console.error('connection error:', error);
  });
app.use(async(req,res,next)=>{
   res.locals.currentUser = req.user
  
  
   next();
})

  app.post(
   '/authenticate',
   passport.authenticate('local', { failureRedirect: '/' }),
   (req: Request, res: Response) => {
     //res.locals.currentUser = (req.user as typeof credential )?.username;
     res.redirect('/index');
   }
 );
app.get("/",(req:Request,res:Response)=>{
   
})



app.listen(8000,():void=>{
   console.log('connection is ready')
})