import mongoose,{Schema,InferSchemaType,Document} from 'mongoose'
const passportLocalMongoose = require('passport-local-mongoose')

const articleSchema = new Schema({  
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
type article = InferSchemaType<typeof articleSchema>;


const article =  mongoose.model('article',articleSchema)
 export default article