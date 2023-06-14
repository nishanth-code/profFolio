import mongoose,{Schema,Document} from 'mongoose'

interface article extends Document{
    title:String,
    topic:String,
    content:String,
    author:String
}


const articleSchema = new Schema<article>({  
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

export default  mongoose.model<article>('article',articleSchema)