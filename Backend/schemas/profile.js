const mongoose = require('mongoose') 
const passportLocalMongoose = require('passport-local-mongoose') 

const schema = mongoose.Schema
const profileSchema = new schema({
    email:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    publications:{type:String},
    articles:{type:String},
    workshops:{type:String}
})


profileSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('profile',profileSchema)