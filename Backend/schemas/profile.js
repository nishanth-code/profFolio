import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const schema = mongoose.Schema
const profileSchema = new schema({
    email:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    publications:{type:String,required:true},
    articles:{type:String,required:true},
    workshops:{type:String,required:true}
})


profileSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('profile',profileSchema)