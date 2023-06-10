import mongoose,{Schema,InferSchemaType,Document} from 'mongoose'
const passportLocalMongoose = require('passport-local-mongoose')

const workshopSchema = new Schema({  
    title:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    //where is it published

})
type workshop = InferSchemaType<typeof workshopSchema>;


const workshop =  mongoose.model('article',workshopSchema)
 export default workshop