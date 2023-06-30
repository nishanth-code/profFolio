const mongoose = require('mongoose') 

const schema = mongoose.Schema

const workshopsSchema = new schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    publishedMedia:{type:String,required:true},
    publishedOn:{type:Date,required:true},
    subject:{type:String,required:true},

})

module.exports = mongoose.model('workshops',workshopsSchema)