import mongoose from 'mongoose'
const schema = mongoose.Schema

const articlesSchema = new schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    publishedMedia:{type:String,required:true},
    publishedOn:{type:Date,required:true},
    subject:{type:String,required:true},

})

module.exports = mongoose.model('articles',articlesSchema)