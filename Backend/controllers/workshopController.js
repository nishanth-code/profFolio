const profile = require('../schemas/profile')
const workshop = require('../schemas/workshop')


const renderAll = async(req,res)=>{
    const workshops = await workshop.find()
    res.status(200).json(workshop)
}

const render = async(req,res)=>{
    const id = req.params.id
    const workshp = await workshop.findById(id)
    res.status(200).json(workshp)
}
const addWorkshop = async(req,res)=>{
    const id = req.user.id
    const user = await profile.findById(id)
    const {
        title,
        organizedBy,
        subject,
        attendedOn
        
    } = req.body.workshop
    const {summary} = req.body
    const workshp = new workshop({
        title:title,
        organizedBy:organizedBy,
        subject:subject,
        attendedOn:attendedOn,
        summary:summary

    })
    user.workshops.push(workshp)
    await workshp.save()
    await user.save()
    res.status(200).json({msg:'sucessfully added'})
    console.log(req.body)

}

const editWorkshop = async(req,res)=>{
    const id = req.params.id
    const {
        title,
        organizedBy,
        subject,
        attendedOn,
        summary
    } = req.body
    // const {
    //     title,
    //     organizedBy,
    //     subject,
    //     attendedOn
        
    // } = req.body.workshop
    // const {summary} = req.body
    await workshop.findByIdAndUpdate(id,{
        title:title,
        organizedBy:organizedBy,
        subject:subject,
        attededOn:attendedOn,
        summary:summary
    })
    res.status(200).json({msg:'sucessfully edited'})
    

}

const deleteWorkshop = async(req,res) =>{
    const id = req.user.id
    const user = await profile.findById(id)
    const wid = req.params.id
    await workshop.findByIdAndDelete(wid)
    user.workshops.splice(user.workshops.indexOf(wid),1)
    await user.save()

    res.json({msg:'deleted sucessfully'}).status(200)
    
    
}
module.exports={renderAll,render,addWorkshop,editWorkshop,deleteWorkshop}