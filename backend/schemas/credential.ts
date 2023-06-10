import mongoose,{Schema,InferSchemaType,Document} from 'mongoose'
const passportLocalMongoose = require('passport-local-mongoose')

const credentialSchema = new Schema({
    email: String,
    phoneNumber : Number,
    

})
type User = InferSchemaType<typeof credentialSchema>;

credentialSchema.plugin(passportLocalMongoose)
const credential =  mongoose.model('User',credentialSchema)
 export default credential