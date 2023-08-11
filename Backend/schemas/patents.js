const { string } = require('joi')
const mongoose = require('mongoose') 
const schema = mongoose.Schema

const patentSchema = new schema({
    title:{type:String,required:true},
    owners:{type:String,required:true},
    applicant:{type:String,required:true},
    patentNumber:{type:Number,required:true},
    filingCountry:{type:String,required:true},
    filingDate:{type:Date,required:true},
    validUpto:{type:Date,required:true},
    status:{type:String,enums:['active','inactive']}



})

module.exports = mongoose.model('patent',patentSchema)