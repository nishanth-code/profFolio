const { string } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema

const publicationsSchema = new schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    user:{type:string,required:true},
    doi:{type:Date,required:true},
    year:{type:Number,required:true},
    subject:{type:String,required:true},
    volume:{type:Number},
    publishedMedia:{type:String},
    editor:{type:String},
    publisher:{type:String},
    pageNo:{type:Number},
    url:{type:String},

})

module.exports = mongoose.model('publications',publicationsSchema)