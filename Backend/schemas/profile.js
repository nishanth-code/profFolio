const mongoose = require('mongoose') 
const passportLocalMongoose = require('passport-local-mongoose') 
const publication = require('./publications')
const article = require('./articles')
const workshops = require('./workshop')

const schema = mongoose.Schema
const profileSchema = new schema({
    email:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    profilePicture:{type:String},
    publications:[{type:schema.Types.ObjectId,ref:'publication'}],
    articles:[{type:schema.Types.ObjectId,ref:'article'}],
    workshops:[{type:schema.Types.ObjectId,ref:'workshop'}]
})


profileSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('profile',profileSchema)