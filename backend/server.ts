import express,{Request,Response,Application} from 'express'

const app:Application = express()

app.get("/",(req:Request,res:Response)=>{
   res.send("welcome to node with typescript")
})



app.listen(8000,():void=>{
   console.log('connection is ready')
})