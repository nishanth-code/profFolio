import mongoose,{Schema,Document} from 'mongoose'


interface works extends Document{
    title:String,
    topic:String,
    content:String,
    author:String

}

const workshopSchema = new Schema<works>({  
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


 export default mongoose.model<works>('article',workshopSchema)