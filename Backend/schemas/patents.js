const mongoose = require('mongoose') 
const schema = mongoose.Schema

const patentSchema = new schema({
    title:{type:String,required:true},
    certificate:{type:string,required:true}
})

module.exports = mongoose.model('patent',patentSchema)