const mongoose = require('mongoose')
const schema = mongoose.schema
const passportLocalMongoose = require('passport-local-mongoose')

const credentialSchema = new schema({
    email: String,
    phoneNumber : Number,


})

credentialSchema.plugin(passportLocalMongoose)
module.exports =  mongoose.model('credential',credentialSchema)