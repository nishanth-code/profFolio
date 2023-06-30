const mongoose = require('mongoose') 
const schema = mongoose.Schema

const certificationSchema = new schema({
    title:{type:String,required:true},
    certificate:{type:String,required:true}
})

module.exports = mongoose.model('certification',certificationSchema)