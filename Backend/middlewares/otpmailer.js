const sendMail = require('../utilities/mailer')

module.exports = async(req,res,next)=>{
    const Email = req.body.email
    const user = await profile.findOne({email:Email})
    if(user){
        const otp = Math.floor(Math.random()*10000)
        sendMail(otp,Email)
        req.otp=otp
        next()
    }else{
        res.json({msg:'email not found in records'}).status(500)
    }
}