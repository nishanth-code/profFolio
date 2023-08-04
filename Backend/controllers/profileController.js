const profile = require("../schemas/profile");
const profilerender =async(req,res)=>{
    const user = await profile.findOne({username:'nishanth'}).populate(['publications','articles','workshops'])
    if (user){
          res.json(user).status(200)
    }else{
        res.json('user not found')
    }

}
const createUser = async(req,res) =>{
    // const {username,email,profilePicture,password}=req.body.user
  
    const newUser = new profile({username:'nishanth',email:'nishanthnavneeth200@gmail.com',profilePicture:'hello'})

    const regUser = await profile.register(newUser,'NIsh@9741')
    res.json(regUser)

}

module.exports = {profilerender,createUser}