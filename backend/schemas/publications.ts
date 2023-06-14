
import mongoose,{Schema,Document} from 'mongoose'
interface publication extends Document{
  title:String,
  topic:String,
  content:String,
  author:String
}


const publicationsSchema = new Schema<publication>({
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



 
 export default  mongoose.model<publication>('publications',publicationsSchema)