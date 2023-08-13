const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const profile = require("../schemas/profile");
const sendMail = require('../utilities/mailer')
const bcrypt = require('bcrypt')
const cloudinary = require('../utilities/cloudinary')
const article =  require('../schemas/articles')
const publication = require('../schemas/publications')
const patent = require('../schemas/patents')
const workshop =  require('../schemas/workshop')
var otp =0




const profilerender =async(req,res)=>{
    const currentUser = req.user.username
    
    const user = await profile.findOne({username:currentUser}).populate(['publications','articles','workshops','patents'])
    
    if (user){
          res.json(user).status(200)
    }else{
        res.json('user not found')
    }

}
const renderPublication = async(req,res) =>{
  const currentUser = req.user.username
  const user = await profile.findOne({username:currentUser}).populate(['publications','articles','workshops','patents'])
  res.json(user.publications).status(200)
}
const createUser = async(req,res) =>{
  console.log(req.body)
    const {username,email,phoneNumber,password}=req.body.values
   
    
      try {
        const imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fdefault-avatar-placeholder-profile-icon-male-vector-23889994&psig=AOvVaw0HYdIPW21ajwMmkqUlwC7d&ust=1691320655623000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC4yZm2xYADFQAAAAAdAAAAABAE"
       
        if(req.file){
        const result = await cloudinary.uploader.upload(req.file.path);
        imageUrl = result.secure_url

        }    
             
        
        const newUser = new profile({username:username,phoneNumber:phoneNumber,email:email,profilePicture:imageUrl})
        const regUser = await profile.register(newUser,password)
        res.json(regUser)
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        res.status(500).json({ error: 'Error uploading image to Cloudinary.' });
      }

    

} 

const sendOTP = async(req,res)=>{
    const Email = req.body.email
    
    const user = await profile.findOne({email:Email})
    if(user){
        otp = Math.floor(Math.random()*10000)
        sendMail(otp,Email)
        res.json({msg:"otp sent sucessfully"}).status(200)
        
        
    }else{
        res.json({msg:'email not found in records'}).status(400)
    }
    
    
  

}
const verifyotp = async(req,res)=>{
  const userotp = req.body.otp
  if(otp===userotp){
    res.json({msg:'authentication sucessfull'}).status(200)
    otp=0
  }else{
    res.json({msg:'incorrect otp'}).status(400)
  }

  
}


const updatePassword = async(req,res)=>{
    const {username,newPassword}= req.body
    const user = await profile.findOne({username:username})
    const test = await user.setPassword(newPassword, (err) => {
        if (err) {
          return res.status(500).json({msg:'Error setting new password.'});
        }
        user.save()



    })
 


    
}

const changePassword = async(req,res)=>{
    const {username,oldPassword,newPassword}= req.body
   
   
    const user = await profile.findOne({username:username})
     
        // Verify the current password before proceeding with the change
      await user.changePassword(oldPassword, newPassword, (err) => {
          if (err) {
          res.status(401).json({msg:'Current password is incorrect.'});

          }else{
            res.status(200).json({msg:'Password changed successfully.'});
          }
        })
       
    
          
        
    
     
    }
    const changeProfilePic = async(req,res) =>{
        const user = await profile.findOne({username:currentUser})
        if (!req.file) {
            return res.status(400).json({msg:'No image file uploaded.'});
          }
        
          try {
            // Upload the image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
        
            // Image uploaded successfully, return the Cloudinary image URL to the client
            const imageUrl = result.secure_url
            const regUser = await profile.findByIdAndUpdate(user._id,{profilePicture:imageUrl},{new:true})
            res.json({msg:'updated sucessfully'}).status(200)
          } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
            res.status(500).json({ error: 'Error uploading image to Cloudinary.' });
          }

    }
const deleteAccount = async(req,res)=>{
   const username = res.locals.username
  const user = await profile.findOne({username:username})
  const {articles,publications,patents,workshops}= user
  try{
    await article.deleteMany({_id:{$in:articles}})
  await publication.deleteMany({_id:{$in:publications}})
  await patent.deleteMany({_id:{$in:patents}})
  await workshop.deleteMany({_id:{$in:workshops}})
  await profile.findByIdAndDelete(user._id)
  res.status(200).json({msg:'sucessfully deleted'})

  }
  catch(err){
    res.status(500).json({msg:`couldnot complete action due to ${err}`})
  }


}

    



module.exports = {renderPublication,profilerender,verifyotp,deleteAccount,changeProfilePic,changePassword,createUser,updatePassword,sendOTP}