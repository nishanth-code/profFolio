const { string } = require('joi')
const mongoose = require('mongoose') 
const schema = mongoose.Schema

const patentSchema = new schema({
    title:{type:String,required:true},
    inventors:{type:String,required:true},
    // applica:{type:String,required:true},
    applicationNumber:{type:String,required:true},
    filingCountry:{type:String,required:true},
    filingDate:{type:Date,required:true},
    subjectCategory:{type:String,required:true},
    publicationDate:{type:Date,required:true},
    profilePicture:{type:String,required:true},
    // validUpto:{type:Date,required:true},
    status:{type:String,enums:['Active','Inactive']}



})

module.exports = mongoose.model('patent',patentSchema)