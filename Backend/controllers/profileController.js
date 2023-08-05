const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const profile = require("../schemas/profile");
const sendMail = require('../utilities/mailer')
const bcrypt = require('bcrypt')
const profilerender =async(req,res)=>{
    const user = await profile.findOne({username:'nishanth'}).populate(['publications','articles','workshops'])
    if (user){
          res.json(user).status(200)
    }else{
        res.json('user not found')
    }

}
const createUser = async(req,res) =>{
    const {username,email,profilePicture,PhoneNumber,password}=req.body.user
    const newUser = new profile({username:username,phoneNumber:PhoneNumber,email:email,profilePicture:profilePicture})
    const regUser = await profile.register(newUser,password)
    res.json(regUser)

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
    // const {username,newPassword}= req.body
    const user = await profile.findOne({username:'nishanth'})
    const test = await user.setPassword('nish@9741', (err) => {
        if (err) {
          return res.status(500).json({msg:'Error setting new password.'});
        }
        user.save()



    })
 


    
}

const changePassword = async(req,res)=>{
    // const {username,oldPassword,newPassword}= req.body
    username = 'nishanth'
    oldPassword = 'nish@9741'
    newPassword = 'NIsh@9741'
   
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
    // const user = await profile.findOne({username:username})
    // console.log(user)
    // const match  = await user.comparePassword(oldPassword)
    // if(match){
    //     const ack=await user.updatePassword(newPassword)
    //     if(ack){
    //         res.status(200).json({msg:'password sucessfully updated'})
    //     }else{
    
    //         res.status(400).json({msg:'internal error occured retry'})
    //     }

    // }
    // else{
    //     res.json({msg:'old password incorrect'}).status(400)
    // }




module.exports = {profilerender,changePassword,createUser,updatePassword,sendOTP}