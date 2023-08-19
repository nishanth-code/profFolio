const mongoose = require('mongoose') 

const schema = mongoose.Schema

const workshopsSchema = new schema({
    title:{type:String,required:true},
    organizedBy:{type:String,required:true},
    //duration:{type:String,required:true},
    subject:{type:String,required:true},
    attendedOn:{type:Date,required:true},
    summary:{type:String,required:true}

})

module.exports = mongoose.model('workshops',workshopsSchema)