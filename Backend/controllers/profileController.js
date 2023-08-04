const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const profile = require("../schemas/profile");
const sendMail = require('../utilities/mailer')
const profilerender =async(req,res)=>{
    const user = await profile.findOne({username:'nishanth'}).populate(['publications','articles','workshops'])
    if (user){
          res.json(user).status(200)
    }else{
        res.json('user not found')
    }

}
const createUser = async(req,res) =>{
    const {username,email,profilePicture,password}=req.body.user
    const newUser = new profile({username:username,email:email,profilePicture:profilePicture})
    const regUser = await profile.register(newUser,password)
    res.json(regUser)

} 

const sendOTP = async(req,res)=>{
    // const Email = req.body.email
    const Email = 'nishanthnavneeth200@gmail.com'
    const user = await profile.findOne({email:Email})
    if(user){
        const otp = Math.floor(Math.random()*10000)
        sendMail(otp,Email)
        res.json({otp:otp}).status(200)
        
        
    }else{
        res.json({msg:'email not found in records'}).status(500)
    }

}


const updatePassword = async(req,res)=>{
    

}

module.exports = {profilerender,createUser,updatePassword,sendOTP}