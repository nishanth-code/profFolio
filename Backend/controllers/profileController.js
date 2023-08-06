const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const profile = require("../schemas/profile");
const sendMail = require('../utilities/mailer')
const bcrypt = require('bcrypt')
const cloudinary = require('../utilities/cloudinary')
const article =  require('../schemas/articles')
const publication = require('../schemas/publications')
const patent = require('../schemas/patents')
const workshop =  require('../schemas/workshop')




const profilerender =async(req,res)=>{
    const user = await profile.findOne({username:'nishanth'}).populate(['publications','articles','workshops'])
    if (user){
          res.json(user).status(200)
    }else{
        res.json('user not found')
    }

}
const createUser = async(req,res) =>{
    const {username,email,PhoneNumber,password}=req.body.user
    if (!req.file) {
        return res.status(400).json({msg:'No image file uploaded.'});
      }
    
      try {
        // Upload the image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
    
        // Image uploaded successfully, return the Cloudinary image URL to the client
        const imageUrl = result.secure_url
        const newUser = new profile({username:username,phoneNumber:PhoneNumber,email:email,profilePicture:imageUrl})
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
        const otp = Math.floor(Math.random()*10000)
        sendMail(otp,Email)
        res.json({otp:otp,username:user.username}).status(200)
        
        
    }else{
        res.json({msg:'email not found in records'}).status(500)
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
  const user = await profile.findOne({username:'mahendar'})
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
    



module.exports = {profilerender,deleteAccount,changeProfilePic,changePassword,createUser,updatePassword,sendOTP}