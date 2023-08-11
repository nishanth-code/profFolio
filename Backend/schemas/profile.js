const mongoose = require('mongoose') 
const passportLocalMongoose = require('passport-local-mongoose') 
const publication = require('./publications')
const article = require('./articles')
const workshops = require('./workshop')
const bcrypt = require('bcrypt')

const schema = mongoose.Schema
const profileSchema = new schema({
    email:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    profilePicture:{type:String},
    publications:[{type:schema.Types.ObjectId,ref:'publications'}],
    articles:[{type:schema.Types.ObjectId,ref:'articles'}],
    workshops:[{type:schema.Types.ObjectId,ref:'workshops'}],
    patents:[{type:schema.Types.ObjectId,ref:'patent'}]
})
profileSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };
  

profileSchema.methods.updatePassword = async function (newPassword) {
    this.password = await bcrypt.hash(newPassword, 10);
    const ack = await this.save();
    return ack
  };


profileSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('profile',profileSchema)