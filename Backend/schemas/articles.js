const mongoose = require('mongoose') 

const schema = mongoose.Schema

const articlesSchema = new schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    publishedMedia:{type:String,required:true},
    publishedOn:{type:Date,required:true},
    subject:{type:String,required:true},
    summary:{type:String,required:true},
    profilePicture:{type:String,required:true}

})

module.exports = mongoose.model('articles',articlesSchema)