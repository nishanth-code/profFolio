import mongoose,{Schema,Document} from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose';


interface User extends  Document {
    email: string;
    phoneNumber: number;
  }



const credentialSchema:Schema<User> = new Schema({
    email: String,
    phoneNumber : Number,
    

})


credentialSchema.plugin(passportLocalMongoose)
const credentialModel = mongoose.model('User',credentialSchema)
 export default credentialModel 