import mongoose,{Schema,InferSchemaType,Document} from 'mongoose'
const passportLocalMongoose = require('passport-local-mongoose')

const publicationsSchema = new Schema({
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
   }
})
type publications = InferSchemaType<typeof publicationsSchema>;


const publication =  mongoose.model('publications',publicationsSchema)
 export default publication