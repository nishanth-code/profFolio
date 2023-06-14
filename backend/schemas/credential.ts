import mongoose,{Schema,Document} from 'mongoose'
const passportLocalMongoose = require('passport-local-mongoose')

interface credentials extends Document{
    email:String,
    phoneNumber:number
}

const credentialSchema = new Schema<credentials>({
    email: String,
    phoneNumber : Number,
    

})


credentialSchema.plugin(passportLocalMongoose)
const credentialModel = mongoose.model<credentials>('User',credentialSchema)
 export{credentialModel ,credentials}